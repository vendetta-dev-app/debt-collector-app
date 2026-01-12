import { graphql } from '@gql'

const RouteByIdQuery = graphql(`
  query RouteById($id: ID!){
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
      collector {
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