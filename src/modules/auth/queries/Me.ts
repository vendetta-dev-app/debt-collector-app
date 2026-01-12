import { graphql } from '@gql'

const Me = graphql(`
  query Me {
    me {
      id
      email
      fullName
      isActive
    }
  }
`)

export default Me;