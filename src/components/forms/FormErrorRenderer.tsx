import {FC, PropsWithChildren} from "react";

const FormErrorRenderer: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="text-xs text-red-500 font-medium">
            {children}
        </div>
    )
}

export default FormErrorRenderer