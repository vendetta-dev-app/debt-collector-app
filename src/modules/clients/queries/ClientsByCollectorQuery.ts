import { graphql } from '@gql'

const ClientsByCollectorQuery = graphql(`
  query ClientsByCollector($first: Int, $after: String) {
    clientsByCollector(first: $first, after: $after) {
      edges {
        node {
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
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`)

export default ClientsByCollectorQuery
