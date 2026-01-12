import { Text } from '@/components'
import FormError from "@/components/forms/FormError"
import clsx from 'clsx'
import type { TextInputProps } from 'flowbite-react'
import { Label, TextInput } from 'flowbite-react'
import { ErrorMessage, Field } from 'formik'
import type { FC } from 'react'
import { useState } from 'react'
import { HiEye, HiEyeOff } from 'react-icons/hi'

interface Props extends TextInputProps {
    label: string
    name: string
    type?: string
    className?: string
    placeholder?: string
}

const AuthFormField: FC<Props> = ({ label, name, type = 'text', className, placeholder, ...rest }) => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div
            className={clsx([
                'flex flex-col gap-y-',
                className,
            ])}>
            <Label htmlFor={name}>
                <Text size="sm" weight="bold">
                    {label}
                </Text>
            </Label>
            <div className="relative">
                <Field
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    type={showPassword ? 'text' : type}
                    as={TextInput}
                    {...rest}
                />
                {
                    type === 'password' &&
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="p-2 absolute inset-y-0 right-0 text-premium-green-600 flex items-center justify-center focus:outline-none">
                        {showPassword ? <HiEyeOff className="h-5 w-5" /> : <HiEye className="h-5 w-5" />}
                    </button>
                }
            </div>
            <ErrorMessage name={name}>
                {(errorValue) =>
                    <FormError>{errorValue}</FormError>
                }
            </ErrorMessage>
        </div>
    )
}

export default AuthFormField