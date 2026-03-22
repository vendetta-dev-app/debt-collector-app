import { LoansLoadingState } from './LoansLoadingState'
import { LoansFilterBar } from './LoansFilterBar'
import { LoansEmptyState } from './LoansEmptyState'
import { LoanCard } from './LoanCard'
import { useLoansData } from '../hooks/useLoansData'
import { useLoansStats, useLoansFilters } from '../hooks/useLoansFilters'

export const LoansCollectorTable = () => {
  // Custom hook for data management
  const {
    filter,
    setFilter,
    searchTerm,
    setSearchTerm,
    allLoans,
    loading,
    error,
    hasData,
    refetch,
  } = useLoansData()

  // Custom hook for stats calculation
  const stats = useLoansStats(allLoans)

  // Custom hook for filtering logic
  const filteredLoans = useLoansFilters(allLoans, filter, searchTerm)

  // Handle loading and error states
  const loadingState = (
    <LoansLoadingState
      loading={loading}
      hasData={hasData}
      error={error}
      onRetry={() => refetch()}
    />
  )

  if (loading && !hasData) return loadingState
  if (error) return loadingState

  return (
    <div className="space-y-6">
      {/* Filter Bar with Search and Stats */}
      <LoansFilterBar
        filter={filter}
        onFilterChange={setFilter}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        stats={stats}
        filteredCount={filteredLoans.length}
        totalCount={allLoans.length}
        onRefresh={() => refetch()}
        isRefreshing={loading}
      />

      {/* Loans List or Empty State */}
      {filteredLoans.length === 0 ? (
        <LoansEmptyState searchTerm={searchTerm} />
      ) : (
        <div className="space-y-3">
          {filteredLoans.map((loan, index) => (
            loan && <LoanCard
              key={loan.id}
              loan={loan}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default LoansCollectorTable
