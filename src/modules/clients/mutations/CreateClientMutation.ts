import { graphql } from '@gql'

const CreateClientMutation = graphql(`
  mutation CreateClient($input: CreateClientInput!) {
    createClient(input: $input) {
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

export default CreateClientMutation
