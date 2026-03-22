import { graphql } from '@gql'

const LoansByClientQuery = graphql(`
  query LoansByClient($clientId: String!, $first: Int, $after: String) {
    loansByClient(clientId: $clientId, first: $first, after: $after) {
      edges {
        node {
          id
          amount
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
          route {
            id
            name
            city {
              id
              name
            }
          }
          payments {
            id
            amount
            paymentDate
            paymentMethod
            notes
            isVoided
            createdAt
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

export default LoansByClientQuery
