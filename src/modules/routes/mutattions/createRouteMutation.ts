import {graphql} from "@gql";

const CreateRouteMutation = graphql(`
    mutation createMutationMutation($input: CreateRouteInput!) {
        createRoute(input: $input) {
            route {
                id
            }
        }
    }
`)

export default CreateRouteMutation