import type { ReactNode } from 'react'
import type { AuthTokenState } from '@auth/types'
import { useAtom } from 'jotai'
import AuthContext from '@auth/contexts/AuthContext'
import client, { authTokenReactiveVar } from '@/client'
import authTokenState, { defaultValue } from '@auth/atoms/authTokenState'

interface Props {
  children?: ReactNode
}

const AuthProvider = ({ children }: Props) => {
  const [authToken, setAuthToken] = useAtom(authTokenState)
  const isAuthenticated = authToken.token !== undefined

  const login = async (tokenAuth: AuthTokenState) => {
    authTokenReactiveVar(JSON.stringify(tokenAuth))
    setAuthToken(() => tokenAuth)
    await client.resetStore()
  }

  const logout = async () => {
    // TODO create a useResetAppState hook to group this logic
    authTokenReactiveVar(null)
    setAuthToken(defaultValue)
    await client.resetStore()
  }

  return (
      <AuthContext.Provider
          value={{
            login,
            logout,
            isAuthenticated,
            authToken,
          }}
      >
        {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider
