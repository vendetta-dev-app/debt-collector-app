import { graphql } from '@gql'

const ClientDetailQuery = graphql(`
  query ClientDetail($id: ID!) {
    client(id: $id) {
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
      route {
        id
        name
      }
      user {
        id
        fullName
        phoneNumber1
        phoneNumber2
        email
      }
    }
  }
`)

export default ClientDetailQuery
