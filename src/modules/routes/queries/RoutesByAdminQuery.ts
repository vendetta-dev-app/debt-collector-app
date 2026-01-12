import { graphql } from '@gql'

const RoutesByAdminQuery = graphql(`
    query RoutesByAdminQuery {
        routesByAdmin{
            pageInfo {
                startCursor
                endCursor
                hasNextPage
                hasPreviousPage
            }
            edges {
                node {
                    id
                    name
                    city {
                        id
                        name
                    }
                    startingBalance
                    administrators{
                        edges {
                            node {
                                id
                                user{
                                    id
                                    fullName
                                }
                            }
                        }
                    }
                    collector {
                        id
                        user {
                            id
                            fullName
                        }
                    }
                    createdAt
                    updatedAt
                }
            }
        }
    }
`)

export default RoutesByAdminQuery