import type { FC, PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Text } from '@components'

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
      <main
          className={clsx([
            'w-full min-h-screen flex flex-col px-4 py-12',
            'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950',
          ])}
      >
        <div className="w-full my-auto">
          <div className="text-center mb-8">
            <div className="inline-grid place-content-center bg-gray-300 rounded-2xl shadow-lg mb-4 p-4">
              <img src="/coin.svg" alt="logo" className="w-12 h-12"/>
            </div>
            <Text as="h1" size="2xl" weight="bold">
              Vendetta
            </Text>
            <Text className="mt-1" size="sm">
              Sistema de Prestamos y Cobranza
            </Text>
          </div>
          {children}
          <Text className="mt-6 text-center" color="gray" size="xs">
            Sistema exclusivo para cobradores autorizados
          </Text>
        </div>
      </main>
  )
}

export default AuthLayout