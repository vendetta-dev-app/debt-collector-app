import type { FC } from 'react'
import type { FieldProps } from 'formik'
import CollectorSelect from "@/components/forms/CollectorSelect"
import type { CollectorAutocompleteOption } from "@/components/forms/CollectorSelect"

interface Props extends FieldProps {
  defaultValue?: CollectorAutocompleteOption
  isDisabled?: boolean
  handleChange?: (collectorId: string) => void
}

const CollectorSelectInput: FC<Props> = ({ field, form, defaultValue, isDisabled, handleChange }) => {
  const onChange = (selectedOption: CollectorAutocompleteOption) => {
    if (selectedOption) {
      form.setFieldValue(field.name, selectedOption.value)
      handleChange?.(selectedOption.value)
    } else {
      form.setFieldValue(field.name, '')
      handleChange?.('')
    }
  }

  return (
    <CollectorSelect
      {...field}
      {...(defaultValue ? { defaultValue } : {})}
      {...(isDisabled ? { isDisabled } : {})}
      onChange={onChange}
    />
  )
}

export default CollectorSelectInput
