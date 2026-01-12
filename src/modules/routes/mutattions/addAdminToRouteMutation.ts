import { graphql } from "@gql";

const AddAdminToRouteMutation = graphql(`
    mutation addAdminToRouteMutation($input: AddAdminToRouteInput!) {
        addAdminToRoute(input: $input){
          route {
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
    }
`)

export default AddAdminToRouteMutation