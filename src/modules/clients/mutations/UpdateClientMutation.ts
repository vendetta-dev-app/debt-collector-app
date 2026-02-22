import { graphql } from '@gql'

const UpdateClientMutation = graphql(`
  mutation UpdateClient($input: UpdateClientInput!) {
    updateClient(input: $input) {
      user {
        id
        email
        fullName
        phoneNumber1
        phoneNumber2
        isActive
      }
    }
  }
`)

export default UpdateClientMutation
