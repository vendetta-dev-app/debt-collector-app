import type { AuthTokenState } from '@auth/types'
import { createContext } from 'react'

interface AuthContext {
  authToken: AuthTokenState
  isAuthenticated: boolean
  login: (tokenAuth: AuthTokenState) => void
  logout: () => void
}

const AuthContext = createContext<AuthContext | null>(null)

export default AuthContext