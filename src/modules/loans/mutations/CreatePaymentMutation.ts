import { graphql } from '@gql'

const CreatePaymentMutation = graphql(`
  mutation CreatePayment($input: CreatePaymentInput!) {
    createPayment(input: $input) {
      payment {
        id
        amount
        paymentDate
        paymentMethod
        notes
        isVoided
        createdAt
        updatedAt
        loan {
          id
          totalPaid
          pendingBalance
          isFullyPaid
          status
        }
      }
    }
  }
`)

export default CreatePaymentMutation
