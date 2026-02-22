import { graphql } from '@gql'

const tokenAuthMutation = graphql(`
  mutation LoginMutation($input: ObtainJSONWebTokenInput!) {
    tokenAuth(input: $input){
      token
      payload
      refreshExpiresIn
      user {
        id
        email
        fullName
        role
        isCollector
        isAdmin
        isClient
      }
    }
  }
`)

export default tokenAuthMutation