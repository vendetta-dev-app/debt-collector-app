export interface AuthTokenState {
  token?: string
  payload?: {
    username: string
    exp: number
    origIat: number
  }
  refreshToken?: string
  refreshExpiresIn?: number
}