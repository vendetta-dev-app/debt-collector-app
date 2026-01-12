import {graphql} from "@gql";

const CreateManagerMutation = graphql(`
    mutation CreateManager($input: CreateManagerInput!) {
        createManager(input: $input) {
            manager {
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
    }
`)

export default CreateManagerMutation