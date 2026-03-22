import { graphql } from '@gql'

const RouteDetailQuery = graphql(`
  query RouteDetail($id: String!) {
    route(id: $id) {
      id
      name
      startingBalance
      currentBalance
      createdAt
      updatedAt
      city {
        id
        name
        region {
          id
          name
        }
      }
      collectorProfile {
        id
        user {
          id
          fullName
          phoneNumber1
        }
      }
      manager {
        id
        user {
          id
          fullName
          phoneNumber1
        }
      }
      administrators {
        edges {
          node {
            id
            user {
              id
              fullName
            }
          }
        }
      }
      loansCount
      pendingLoansCount
      transactions {
        id
        amount
        transactionType
        description
        createdAt
        maker {
          id
          fullName
        }
      }
    }
  }
`)

export default RouteDetailQuery
