import { graphql } from '@gql'

const RoutesByCollectorQuery = graphql(`
  query RoutesByCollector($first: Int, $after: String) {
    routesByCollector(first: $first, after: $after) {
      edges {
        node {
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
          manager {
            id
            user {
              id
              fullName
              phoneNumber1
            }
          }
          loansCount
          pendingLoansCount
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`)

export default RoutesByCollectorQuery
