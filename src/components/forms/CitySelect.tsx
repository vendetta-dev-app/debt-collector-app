import type { FC } from 'react'
import type { CityNode } from '@types'
import debounce from 'lodash/debounce'
import { useLazyQuery } from '@apollo/client'
import { AsyncSelect } from '@components'
import { makeCityLabel } from '@/snippets/cities'
import CitiesQuery from '@/modules/routes/queries/CitiesQuery'
import {SingleValue} from "react-select";

export type CityAutocompleteOption = {
  value: string
  label: string
}

interface Props {
  defaultValue?: CityAutocompleteOption
  onChange?: (selectedOption: CityAutocompleteOption) => void
}

const CitySelect: FC<Props> = ({ defaultValue, onChange }) => {
  const [getCities] = useLazyQuery(CitiesQuery)

  const getAsyncOptions = (inputValue: string) => {
    return new Promise((resolve) => {
      getCities({
        variables: {
          searchNames_Icontains: inputValue,
        },
      })
          .then(response => {
            resolve(response?.data?.cities?.edges.map(edge => ({
              value: edge?.node?.id,
              label: makeCityLabel(edge?.node as CityNode),
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

  const handleSelectChange = (selectedOption: SingleValue<CityAutocompleteOption>) => {
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
          noOptionsMessage={() => 'No existe una ciudad valida con ese nombre'}
          isClearable={true}
          onChange={handleSelectChange}
          {...(defaultValue ? { defaultValue } : {})}
      />
  )
}

export default CitySelect