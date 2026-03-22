export type LoanFilter = 'all' | 'overdue' | 'active' | 'paid'

export interface LoanStats {
  total: number
  overdue: number
  active: number
  paid: number
}

export type LoanNode = {
  id: string
  amount?: number | null
  totalPaid?: number | null
  pendingBalance?: number | null
  isOverdue?: boolean | null
  isFullyPaid?: boolean | null
  daysOverdue?: number | null
  dueDate?: string | null
  createdAt?: string | null
  client?: {
    user?: {
      fullName?: string | null
    } | null
    alias?: string | null
    addressLine1?: string | null
    neighborhood?: string | null
  } | null
  route?: {
    name?: string | null
    city?: {
      name?: string | null
    } | null
  } | null
}

export interface LoanEdge {
  node: LoanNode | null
}

export interface LoansData {
  loansByCollector: {
    edges: LoanEdge[] | null
  } | null
}
