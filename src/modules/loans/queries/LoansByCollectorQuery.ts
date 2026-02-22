import { graphql } from '@gql'

const LoansByCollectorQuery = graphql(`
  query LoansByCollector($collectorId: String, $first: Int, $after: String) {
    loansByCollector(collectorId: $collectorId, first: $first, after: $after) {
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

export default LoansByCollectorQuery
