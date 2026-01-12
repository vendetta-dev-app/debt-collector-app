import type { ClientNodeEdge } from '@types'
import type { ColumnDef } from '@tanstack/react-table'
import { Badge } from 'flowbite-react'
import { useMemo } from 'react'
import QueryTable from '@/components/tables/QueryTable'
import ClientsByAdminQuery from '@/modules/clients/mutations/ClientsByAdminQuery'

const ClientsTable = () => {
  const columns = useMemo<ColumnDef<ClientNodeEdge>[]>(
      () => [
        {
          id: 'fullName',
          header: 'Nombre',
          enableSorting: false,
          accessorKey: 'node.user.fullName',
        },
        {
          id: 'addressLine1',
          header: 'Dirección',
          enableSorting: false,
          accessorKey: 'node.addressLine1',
        },
        {
          id: 'isActive',
          header: 'Monto Actual',
          enableSorting: false,
          cell: info => {
            const isActive = info.row.original.node?.isActive
            return (
                <Badge className="inline" color={isActive ? 'green' : 'red'} size="lg">
                  {isActive ? 'Activo' : 'Inactivo'}
                </Badge>
            )
          },
        },
      ],
      [],
  )

  return (
      <QueryTable
          query={ClientsByAdminQuery}
          columns={columns}
          accessor="clientsByAdmin"
      />
  )
}

export default ClientsTable