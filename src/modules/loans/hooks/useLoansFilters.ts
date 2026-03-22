import { useMemo } from 'react'
import type { LoanNode, LoanFilter, LoanStats } from '@/modules/loans/types/loans'

export const useLoansStats = (loans: (LoanNode | null | undefined)[]): LoanStats => {
  return useMemo(() => ({
    total: loans.length,
    overdue: loans.filter(l => l?.isOverdue && !l?.isFullyPaid).length,
    active: loans.filter(l => !l?.isFullyPaid && !l?.isOverdue).length,
    paid: loans.filter(l => l?.isFullyPaid).length,
  }), [loans])
}

export const useLoansFilters = (loans: (LoanNode | null | undefined)[], filter: LoanFilter, searchTerm: string) => {
  return useMemo(() => {
    // Filter out null/undefined first
    const validLoans = loans.filter((l): l is LoanNode => l !== null && l !== undefined)

    // Apply status filter
    let filtered = validLoans

    switch (filter) {
      case 'overdue':
        filtered = validLoans.filter(loan => loan?.isOverdue && !loan?.isFullyPaid)
        break
      case 'active':
        filtered = validLoans.filter(loan => !loan?.isFullyPaid && !loan?.isOverdue)
        break
      case 'paid':
        filtered = validLoans.filter(loan => loan?.isFullyPaid)
        break
      default:
        filtered = validLoans
    }

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(loan => {
        return (
          loan?.client?.user?.fullName?.toLowerCase().includes(searchLower) ||
          loan?.client?.alias?.toLowerCase().includes(searchLower) ||
          loan?.client?.neighborhood?.toLowerCase().includes(searchLower)
        )
      })
    }

    return filtered
  }, [loans, filter, searchTerm])
}
