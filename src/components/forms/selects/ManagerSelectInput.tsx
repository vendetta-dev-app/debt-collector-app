import type {FC} from 'react'
import type {FieldProps} from 'formik'
import type {SelectOption} from "@/components/forms/selects/types"
import ManagerSelect from "@/components/forms/ManagerSelect"

interface Props extends FieldProps {
    defaultValue?: SelectOption
    isDisabled?: boolean
    handleChange?: (collectorId: string) => void
}

const ManagerSelectInput: FC<Props> = ({field, form, defaultValue, isDisabled, handleChange}) => {
    const onChange = async (selectedOption: SelectOption) => {
        if (selectedOption) {
            await form.setFieldValue(field.name, selectedOption.value)
            handleChange?.(selectedOption.value)
        } else {
            await form.setFieldValue(field.name, '')
            handleChange?.('')
        }
    }

    return (
        <ManagerSelect
            {...field}
            {...(defaultValue ? {defaultValue} : {})}
            {...(isDisabled ? {isDisabled} : {})}
            onChange={onChange}
        />
    )
}

export default ManagerSelectInput
