import { graphql } from '@gql'

const ClientsByAdminQuery = graphql(`
    query ClientsByAdmin {
        clientsByAdmin {
            edges{
                node{
                    id
                    user {
                        id
                        fullName
                    }
                    addressLine1
                    alias
                    isActive
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

export default ClientsByAdminQuery