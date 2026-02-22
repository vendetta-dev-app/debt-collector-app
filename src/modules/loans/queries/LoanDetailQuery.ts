import { graphql } from '@gql'

const LoanDetailQuery = graphql(`
  query LoanDetail($id: ID!) {
    loan(id: $id) {
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
          phoneNumber1
          phoneNumber2
        }
        alias
        addressLine1
        addressLine2
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
`)

export default LoanDetailQuery
