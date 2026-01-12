import { graphql } from '@gql'

const TransactionsByRouteIdQuery = graphql(`
    query TransactionsByRouteId($routeId: String){
        transactions(routeId: $routeId){
            edges {
                node {
                    id
                    description
                    transactionType
                    amount
                    createdAt
                    updatedAt
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

export default TransactionsByRouteIdQuery