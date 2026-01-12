import {graphql} from "@gql";

const CollectorsByAdminQuery = graphql(`
    query CollectorByAdminQuery($fullName: String, $isActive: Boolean) {
        collectorsByAdmin(fullName: $fullName, isActive: $isActive) {
            pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
            }
            totalCount
            edges {
                node {
                    id
                    isActive
                    user {
                        email
                        id
                        fullName
                        phoneNumber1
                        phoneNumber2
                    }
                }
            }
        }
    }
`)
export default CollectorsByAdminQuery