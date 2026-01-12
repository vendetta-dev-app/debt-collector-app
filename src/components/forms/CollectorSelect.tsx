import type {FC} from 'react'
import debounce from 'lodash/debounce'
import {useLazyQuery} from '@apollo/client'
import {AsyncSelect} from '@components'
import collectorByAdminQuery from "@/modules/collectors/queries/collectorByAdminQuery";
import {SingleValue} from "react-select";

export type CollectorAutocompleteOption = {
  value: string
  label: string
}

interface Props {
  defaultValue?: CollectorAutocompleteOption
  onChange?: (selectedOption: CollectorAutocompleteOption) => void
}

const CollectorSelect: FC<Props> = ({ defaultValue, onChange }) => {
  const [getCollector] = useLazyQuery(collectorByAdminQuery, {
    variables: {
      isActive: true
    }
  })

  const getAsyncOptions = (inputValue: string) => {
    return new Promise((resolve) => {
      getCollector({
        variables: {
          fullName: inputValue,
        },
      })
        .then(response => {
          resolve(response?.data?.collectorsByAdmin?.edges.map(edge => ({
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
      noOptionsMessage={() => 'No existe una cobrador valido con ese nombre'}
      isClearable={true}
      onChange={handleSelectChange}
      {...(defaultValue ? { defaultValue } : {})}
    />
  )
}

export default CollectorSelect