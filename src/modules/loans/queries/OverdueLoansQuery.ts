import { graphql } from '@gql'

const OverdueLoansQuery = graphql(`
  query OverdueLoans($first: Int, $after: String) {
    overdueLoans(first: $first, after: $after) {
      edges {
        node {
          id
          amount
          installments
          paymentFrequency
          isApproved
          isFullyPaid
          isOverdue
          daysOverdue
          dueDate
          createdAt
          totalAmount
          totalPaid
          pendingBalance
          client {
            id
            user {
              id
              fullName
              phoneNumber1
              phoneNumber2
            }
            alias
            addressLine1
            neighborhood
          }
          route {
            id
            name
            city {
              id
              name
            }
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

export default OverdueLoansQuery
