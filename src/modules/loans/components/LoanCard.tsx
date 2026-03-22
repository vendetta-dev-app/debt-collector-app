import { Link } from 'react-router-dom'
import { Badge } from 'flowbite-react'
import {
  HiOutlineChevronRight,
  HiOutlineClock,
  HiOutlineCollection,
  HiOutlineLocationMarker,
} from 'react-icons/hi'
import CurrencyCell from '@/components/tables/CurrencyCell'
import type { LoanNode } from '@/modules/loans/types/loans'

interface LoanCardProps {
  loan: LoanNode
  index: number
}

const getLoanBorderColor = (loan: LoanNode): string => {
  if (loan?.isOverdue && !loan?.isFullyPaid) return 'border-red-500 hover:border-red-600'
  if (loan?.isFullyPaid) return 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
  return 'border-green-500 hover:border-green-600'
}

export const LoanCard = ({ loan, index }: LoanCardProps) => {
  const borderColor = getLoanBorderColor(loan)

  return (
    <Link
      to={`/loans/${loan?.id}`}
      className={`
        block bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md
        transition-all duration-200 border-l-4 overflow-hidden
        animate-in fade-in slide-in-from-bottom-2
        ${borderColor}
      `}
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <div className="flex justify-between items-start gap-3 p-4">
        <div className="flex-1 min-w-0">
          {/* Client Header */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <p className="text-base font-semibold text-gray-900 dark:text-white truncate">
              {loan?.client?.user?.fullName}
            </p>
            {loan?.client?.alias && (
              <Badge color="gray" size="xs" className="hidden sm:inline-block font-medium">
                {loan?.client?.alias}
              </Badge>
            )}
            {loan?.isOverdue && !loan?.isFullyPaid && (
              <Badge color="red" size="xs" className="font-semibold">
                Vencido {loan?.daysOverdue}d
              </Badge>
            )}
            {loan?.isFullyPaid && (
              <Badge color="success" size="xs" className="font-semibold">Pagado</Badge>
            )}
            {!loan?.isFullyPaid && !loan?.isOverdue && (
              <Badge color="success" size="xs" className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 font-semibold">
                Activo
              </Badge>
            )}
          </div>

          {/* Location */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-2">
            <HiOutlineLocationMarker className="w-3.5 h-3.5" />
            <span>{loan?.client?.addressLine1}, {loan?.client?.neighborhood}</span>
          </div>

          {/* Route Info */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-3">
            <HiOutlineCollection className="w-3.5 h-3.5" />
            <span className="truncate">{loan?.route?.name}</span>
            <span className="hidden sm:inline">· {loan?.route?.city?.name}</span>
          </div>

          {/* Amounts Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="px-3 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <p className="text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold mb-1">
                Monto
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                <CurrencyCell value={loan?.amount || 0} />
              </p>
            </div>
            <div className="px-3 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-[10px] uppercase tracking-wide text-green-600 dark:text-green-400 font-semibold mb-1">
                Pagado
              </p>
              <p className="text-sm font-semibold text-green-700 dark:text-green-300">
                <CurrencyCell value={loan?.totalPaid || 0} />
              </p>
            </div>
            <div className="px-3 py-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-[10px] uppercase tracking-wide text-red-600 dark:text-red-400 font-semibold mb-1">
                Pendiente
              </p>
              <p className={`text-sm font-semibold ${loan?.pendingBalance && loan.pendingBalance > 0 ? 'text-red-700 dark:text-red-300' : 'text-green-700 dark:text-green-300'}`}>
                <CurrencyCell value={loan?.pendingBalance || 0} />
              </p>
            </div>
          </div>

          {/* Due Date */}
          {!loan?.isFullyPaid && loan?.dueDate && (
            <div className="mt-3 flex items-center gap-1.5 text-xs">
              <HiOutlineClock className="w-3.5 h-3.5" />
              <span className="text-gray-500 dark:text-gray-400">Vence: </span>
              <p className={`font-medium ${loan?.isOverdue ? 'text-red-600 dark:text-red-400' : 'text-gray-700 dark:text-gray-300'}`}>
                {new Date(loan?.dueDate).toLocaleDateString('es-ES', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric'
                })}
              </p>
            </div>
          )}
        </div>

        <HiOutlineChevronRight className="text-gray-400 text-xl flex-shrink-0 mt-1" />
      </div>
    </Link>
  )
}
