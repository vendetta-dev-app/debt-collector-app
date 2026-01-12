import type { FC, PropsWithChildren } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <main>
            <div className="w-full h-screen flex flex-col items-center">
                <div className="mt-12 flex">
                    <img src="/coin.svg" alt="" className="w-8" />
                </div>
                <div className="mt-8 w-full md:max-w-sm">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout