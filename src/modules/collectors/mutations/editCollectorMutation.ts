import {graphql} from "@gql";

const EditCollectorMutation = graphql(`
    mutation EditCollector($userId: String!, $email: String!, $fullName: String!, $phoneNumber1: String!, $phoneNumber2: String, $isActive: Boolean!) {
        editCollector(input: {userId: $userId, email: $email, fullName: $fullName, phoneNumber1: $phoneNumber1, phoneNumber2: $phoneNumber2, isActive: $isActive}) {
            user {
                id
                collectorProfile {
                    id
                }
            }
        }
    }
`)

export default EditCollectorMutation