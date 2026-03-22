import { graphql } from '@gql'

const RouteByIdQuery = graphql(`
  query RouteById($id: String!){
    route(id: $id){
      id
      name
      startingBalance
      city {
        id
        name
      }
      administrators{
        edges {
          node {
            id
            user{
              id
              fullName
              isActive
            }
          }
        }
      }
      collectorProfile {
        id
        user {
          id
          fullName
          isActive
        }
      }
      createdAt
      updatedAt
    }
  }
`)

export default RouteByIdQuery