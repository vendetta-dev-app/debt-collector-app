import { atomWithStorage } from 'jotai/utils'
import type { AuthTokenState } from '@auth/types'
import { AUTH_TOKEN_KEY } from '@auth/constants'

export const defaultValue: AuthTokenState = {
  token: localStorage.getItem(AUTH_TOKEN_KEY) || undefined,
  payload: undefined,
  refreshToken: undefined,
  refreshExpiresIn: undefined,
}

const authTokenState = atomWithStorage<AuthTokenState>(AUTH_TOKEN_KEY, defaultValue)

export default authTokenState