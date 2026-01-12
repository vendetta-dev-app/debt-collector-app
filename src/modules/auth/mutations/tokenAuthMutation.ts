import { graphql } from '@gql'

const tokenAuthMutation = graphql(`
  mutation LoginMutation($email: String! $password: String!) {
    tokenAuth(email: $email, password: $password){
      token
      payload
      refreshExpiresIn
    }
  }
`)

export default tokenAuthMutation