import type { FC } from 'react'
import type { FieldProps } from 'formik'
import CitySelect from "@/components/forms/CitySelect"
import type { CityAutocompleteOption } from "@/components/forms/CitySelect"

interface Props extends FieldProps {
  defaultValue?: CityAutocompleteOption
  isDisabled?: boolean
  handleChange?: (cityId: string) => void
}

const CitySelectInput: FC<Props> = ({ field, form, defaultValue, isDisabled, handleChange }) => {
  const onChange = (selectedOption: CityAutocompleteOption) => {
    if (selectedOption) {
      form.setFieldValue(field.name, selectedOption.value)
      handleChange?.(selectedOption.value)
    } else {
      form.setFieldValue(field.name, '')
      handleChange?.('')
    }
  }

  return (
    <CitySelect
      {...field}
      {...(defaultValue ? { defaultValue } : {})}
      {...(isDisabled ? { isDisabled } : {})}
      onChange={onChange}
    />
  )
}

export default CitySelectInput
