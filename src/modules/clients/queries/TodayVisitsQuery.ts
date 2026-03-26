import { graphql } from '@gql'

const TodayVisitsQuery = graphql(`
  query TodayVisits {
    todayVisits {
      id
      alias
      visitOrder
      neighborhood
      addressLine1
      user {
        id
        fullName
        phoneNumber1
      }
      loans {
        edges {
          node {
            id
            shouldVisitToday
            isFullyPaid
            paymentStatus
            installmentAmount
            installmentsCompleted
            installmentsDue
            pendingBalance
            paymentFrequency
            nextVisitDate
          }
        }
      }
    }
  }
`)

export default TodayVisitsQuery
