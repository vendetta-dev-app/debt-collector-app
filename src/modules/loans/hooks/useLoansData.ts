import type { LoanFilter } from '@/modules/loans/types/loans'
import { useState } from 'react'
import { useQuery } from '@apollo/client'
import OverdueLoansQuery from '@/modules/loans/queries/OverdueLoansQuery'
import LoansByCollectorQuery from '@/modules/loans/queries/LoansByCollectorQuery'

export const useLoansData = () => {
  const [filter, setFilter] = useState<LoanFilter>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const { data: allData, loading: allLoading, error: allError, refetch } = useQuery(
    LoansByCollectorQuery,
    {
      variables: { first: 100 },
      fetchPolicy: 'cache-and-network'
    }
  )

  const { data: overdueData } = useQuery(OverdueLoansQuery, {
    variables: { first: 100 },
    fetchPolicy: 'cache-and-network'
  })

  const allLoans = allData?.loansByCollector?.edges?.map(edge => edge?.node).filter(Boolean) || []
  const overdueLoans = overdueData?.overdueLoans?.edges?.map(edge => edge?.node).filter(Boolean) || []

  return {
    // State
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,

    // Data
    allLoans,
    overdueLoans,

    // Query state
    loading: allLoading,
    error: allError,
    hasData: !!allData,
    refetch,
  }
}
