import { graphql } from '@gql'

const CitiesQuery = graphql(`
  query Cities($searchNames_Icontains: String){
    cities(searchNames_Icontains: $searchNames_Icontains){
      edges{
        node{
          id
          name
          region{
            name
          }
        }
      }
    }
  }
`)

export default CitiesQuery