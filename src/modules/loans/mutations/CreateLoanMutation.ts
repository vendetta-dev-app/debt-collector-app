import { graphql } from '@gql'

const CreateLoanMutation = graphql(`
  mutation CreateLoan($input: CreateLoanInput!) {
    createLoan(input: $input) {
      loan {
        id
        amount
        installments
        paymentFrequency
        isApproved
        isRejected
        dueDate
        createdAt
        totalAmount
        status
        route {
          id
          name
        }
        client {
          id
          alias
          user {
            id
            fullName
          }
        }
      }
    }
  }
`)

export default CreateLoanMutation
