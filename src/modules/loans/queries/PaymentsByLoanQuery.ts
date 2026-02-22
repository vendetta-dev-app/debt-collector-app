import { graphql } from '@gql'

const PaymentsByLoanQuery = graphql(`
  query PaymentsByLoan($loanId: String!, $first: Int, $after: String) {
    paymentsByLoan(loanId: $loanId, first: $first, after: $after) {
      edges {
        node {
          id
          amount
          paymentDate
          paymentMethod
          notes
          isVoided
          voidedAt
          voidReason
          createdAt
          updatedAt
          loan {
            id
            client {
              id
              user {
                id
                fullName
              }
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

export default PaymentsByLoanQuery
