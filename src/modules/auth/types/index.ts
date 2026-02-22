import type { LoginMutationMutation, Scalars, AccountsUserRoleChoices } from '@/gql/graphql'

export type AuthUser = NonNullable<LoginMutationMutation['tokenAuth']>['user']

export type { AccountsUserRoleChoices }

export interface AuthTokenState {
  token?: Scalars['String']['output']
  payload?: Scalars['GenericScalar']['output']
  refreshToken?: Scalars['String']['output']
  refreshExpiresIn?: Scalars['Int']['output']
  user?: AuthUser
}