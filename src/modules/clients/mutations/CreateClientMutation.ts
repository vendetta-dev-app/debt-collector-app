import { graphql } from '@gql'

const CreateClientMutation = graphql(`
  mutation CreateClient($input: CreateClientInput!) {
    createClient(input: $input) {
      user {
        id
        fullName
        phoneNumber1
        phoneNumber2
        isActive
        clientProfile {
          id
          alias
          identityDocument
          addressLine1
          addressLine2
          neighborhood
          city
          addressReference
          latitude
          longitude
        }
      }
    }
  }
`)

export default CreateClientMutation
