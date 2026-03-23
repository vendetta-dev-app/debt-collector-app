import { graphql } from '@gql'

const Me = graphql(`
  query Me {
    me {
      id
      email
      fullName
      isActive
      collectorProfile {
        id
        route {
          id
          name
          startingBalance
          currentBalance
          createdAt
          updatedAt
          city {
            id
            name
            region {
              id
              name
            }
          }
          manager {
            id
            user {
              id
              fullName
              phoneNumber1
            }
          }
          loansCount
          overdueLoansCount
        }
      }
    }
  }
`)

export default Me