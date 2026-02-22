import { graphql } from '@gql'

const LoansByRouteQuery = graphql(`
  query LoansByRoute($routeId: String!, $first: Int, $after: String) {
    loansByRoute(routeId: $routeId, first: $first, after: $after) {
      edges {
        node {
          id
          amount
          interestRate
          installments
          paymentFrequency
          isApproved
          isRejected
          isFullyPaid
          isOverdue
          daysOverdue
          dueDate
          createdAt
          updatedAt
          totalAmount
          totalPaid
          pendingBalance
          status
          client {
            id
            user {
              id
              fullName
            }
            alias
            addressLine1
            neighborhood
            isActive
            collector {
              id
              user {
                id
                fullName
              }
            }
          }
          route {
            id
            name
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

export default LoansByRouteQuery
