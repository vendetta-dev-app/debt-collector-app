import {graphql} from '@gql'

const ManagersByAdminQuery = graphql(`
    query ManagersByAdmin {
        managersByAdmin {
            edges {
                node {
                    id
                    isActive
                    user {
                        id
                        email
                        fullName
                        phoneNumber1
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

export default ManagersByAdminQuery