import type {FC, PropsWithChildren} from 'react'

const FormError: FC<PropsWithChildren> = ({children}) => {
    return (
        <p className="text-sm text-red-600 dark:text-red-500">
            {children}
        </p>
    )
}

export default FormError