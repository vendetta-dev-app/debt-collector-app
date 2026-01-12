import type {FC} from 'react'
import type {SingleValue} from "react-select";
import debounce from 'lodash/debounce'
import {useLazyQuery} from '@apollo/client'
import {AsyncSelect} from '@components'
import ManagersByAdminQuery from "@/modules/responsibles/queries/ManagersByAdminQuery";

export type CollectorAutocompleteOption = {
    value: string
    label: string
}

interface Props {
    defaultValue?: CollectorAutocompleteOption
    onChange?: (selectedOption: CollectorAutocompleteOption) => void
}

const ManagerSelect: FC<Props> = ({defaultValue, onChange}) => {
    const [getManagers] = useLazyQuery(ManagersByAdminQuery)

    // TODO implement filter for input text value
    const getAsyncOptions = (inputValue: string) => {
        return new Promise((resolve) => {
            getManagers()
                .then(response => {
                    resolve(response?.data?.managersByAdmin?.edges.map(edge => ({
                        value: edge?.node?.id,
                        label: edge?.node?.user.fullName,
                    })))
                })
                .catch(() => {
                    resolve([])
                })
        })
    }

    const loadOptions = debounce((inputText, callback) => {
        getAsyncOptions(inputText).then((options) => callback(options))
    }, 500)

    const handleSelectChange = (selectedOption: SingleValue<CollectorAutocompleteOption>) => {
        if (onChange && selectedOption) {
            onChange(selectedOption)
        }
    }

    return (
        <AsyncSelect
            placeholder="Comienza a escribir y selecciona..."
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions
            menuPosition="fixed"
            loadingMessage={() => 'Cargando...'}
            noOptionsMessage={() => 'No existe una responsable valido con ese nombre'}
            isClearable={true}
            onChange={handleSelectChange}
            {...(defaultValue ? {defaultValue} : {})}
        />
    )
}

export default ManagerSelect