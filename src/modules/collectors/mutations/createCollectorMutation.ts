import {graphql} from "@gql";

const createCollectorMutation = graphql(`
    mutation CreateCollectorMutation( $email: String!, $fullName:String!, $phoneNumber1: String!,$phoneNumber2: String, $password: String!) {
        createCollector(input: {email: $email, fullName: $fullName, phoneNumber1: $phoneNumber1, phoneNumber2: $phoneNumber2, password: $password}){
            collector {
                id
            }
        }
    }
`)

export default createCollectorMutation;