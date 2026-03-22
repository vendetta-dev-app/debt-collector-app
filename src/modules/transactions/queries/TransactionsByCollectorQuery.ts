import { graphql } from '@gql'

const TransactionsByCollectorQuery = graphql(`
  query TransactionsByCollector {
    transactionsByCollector {
      id
      transactionType
      amount
      description
      createdAt
      voided
    }
  }
`)

export default TransactionsByCollectorQuery
