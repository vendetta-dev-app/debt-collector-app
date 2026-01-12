import { graphql } from '@gql'

const createAdminMutation = graphql(`
    mutation CreateAdminMutation(
        $email: String!, 
        $fullName: String!, 
        $phoneNumber1: String!, 
        $phoneNumber2: String!, 
        $invitationCode: String!, 
        $password: String!
    ) {
        createAdmin(
            input: {
                email: $email,
                fullName: $fullName,
                phoneNumber1: $phoneNumber1,
                phoneNumber2: $phoneNumber2,
                invitationCode: $invitationCode,
                password: $password
            }
        ) {
            user {
                id
            }
        }
    }
`)

export default createAdminMutation