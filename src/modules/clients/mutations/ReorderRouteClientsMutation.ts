import { graphql } from '@gql'

const ReorderRouteClientsMutation = graphql(`
  mutation ReorderRouteClients($input: ReorderRouteClientsInput!) {
    reorderRouteClients(input: $input) {
      success
    }
  }
`)

export default ReorderRouteClientsMutation
