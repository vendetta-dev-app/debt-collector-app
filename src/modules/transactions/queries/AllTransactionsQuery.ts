import { graphql } from '@gql'

const AllTransactionsQuery = graphql(`
  query AllTransactions($first: Int, $after: String) {
    transactions(first: $first, after: $after) {
      edges {
        node {
          id
          description
          transactionType
          amount
          createdAt
          updatedAt
          maker {
            id
            fullName
          }
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

export default AllTransactionsQuery
