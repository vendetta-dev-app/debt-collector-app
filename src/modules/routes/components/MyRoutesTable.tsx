import type { RouteNodeEdge } from '@types'
import type { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye } from 'react-icons/fa'
import QueryTable from '@/components/tables/QueryTable'
import CurrencyCell from '@/components/tables/CurrencyCell'
import RoutesByAdminQuery from '@/modules/routes/queries/RoutesByAdminQuery'

const MyRoutesTable = () => {
  const navigate = useNavigate()

  const columns = useMemo<ColumnDef<RouteNodeEdge>[]>(
      () => [
        {
          id: 'name',
          header: 'Nombre',
          enableSorting: false,
          accessorKey: 'node.name',
        },
        {
          id: 'city',
          header: 'Ciudad',
          enableSorting: false,
          accessorKey: 'node.city.name',
        },
        {
          id: 'collector',
          header: 'Cobrador',
          enableSorting: false,
          accessorKey: 'node.collector.user.fullName',
          cell: info => (
              <span className="truncate block">{info.row.original.node?.collector?.user.fullName}</span>
          ),
        },
        {
          id: 'startingBalance',
          header: 'Monto inicial',
          enableSorting: false,
          cell: info => (
              <CurrencyCell value={info.row.original.node?.startingBalance}/>
          ),
        },
        {
          id: 'currentBalance',
          header: 'Monto Actual',
          enableSorting: false,
          cell: () => (
              <CurrencyCell value={0}/>
          ),
        },
        {
          id: 'actions',
          header: '',
          size: 50,
          cell: info => (
              <button
                  className="flex items-center gap-2 link"
                  onClick={() => navigate(`/routes/${info.row.original.node?.id}`)}
              >
                ver
                <FaEye/>
              </button>
          ),
        },
      ],
      [],
  )

  return (
      <QueryTable
          query={RoutesByAdminQuery}
          columns={columns}
          accessor="routesByAdmin"
      />
  )
}

export default MyRoutesTable