import type { ComponentType, FC, InputHTMLAttributes, ReactNode, WheelEvent } from 'react'
import type { FieldProps } from 'formik'
import { ErrorMessage, Field } from 'formik'
import { Label, TextInput } from 'flowbite-react'
import FormError from "@/components/forms/FormError";


interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  as?: ComponentType | ComponentType<FieldProps> | string
  children?: ReactNode
  className?: string
  component?: ComponentType | ComponentType<FieldProps>
  defaultValue?: string | number | readonly string[] | undefined | object
  disabled?: boolean
  handleChange?: (uid: string) => void
  label: string
  name: string
  pattern?: string
  placeholder?: string
  type?: string
}

const FormField: FC<Props> = ({
                                as,
                                className,
                                component,
                                disabled = false,
                                label,
                                name,
                                placeholder,
                                type = 'text',
                                ...rest
                              }) => {
  return (
      <div className={className}>
        <Label htmlFor={name}>{label}</Label>
        <div className="mt-1">
          <Field
              id={name}
              name={name}
              placeholder={placeholder}
              disabled={disabled}
              type={type}
              {...{ ...(type === 'number' && { onWheel: (e: WheelEvent) => (e.target as HTMLElement).blur() }) }}
              {...{ ...(component ? { component } : { as: as ?? TextInput }) }}
              {...rest}
          />
        </div>
        <ErrorMessage name={name} component={FormError}/>
      </div>
  )
}

export default FormField