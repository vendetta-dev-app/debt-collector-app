import type { CollectorNodeEdge } from '@types'
import type { ColumnDef } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Button } from 'flowbite-react'
import NiceModal from '@ebay/nice-modal-react'
import QueryTable from '@/components/tables/QueryTable'
import EditCollectorModal from '@/modules/collectors/components/EditCollectorModal'
import CollectorsByAdminQuery from '@/modules/collectors/queries/collectorByAdminQuery'
import CollectorStatusButton from '@/modules/collectors/components/CollectorStatusButton'

const MyCollectorsTable = () => {
  const columns = useMemo<ColumnDef<CollectorNodeEdge>[]>(
      () => [
        {
          id: 'name',
          header: 'Nombre',
          enableSorting: false,
          accessorKey: 'node.user.fullName',
        },
        {
          id: 'email',
          header: 'Correo',
          accessorKey: 'node.user.email',
          enableSorting: false,
        },
        {
          id: 'status',
          header: 'Estado',
          cell: info => {
            const status = info.row.original.node?.isActive
            return (
                <CollectorStatusButton status={status!}/>
            )
          },
        },
        {
          id: 'actions',
          header: '',
          size: 50,
          cell: info => (
              <div className="flex justify-center">
                <Button
                    size="xs"
                    onClick={() =>
                        NiceModal.show(EditCollectorModal, { node: info.row.original.node! })
                    }>
                  Editar
                </Button>
              </div>
          ),
        },
      ],
      [],
  )

  return (
      <QueryTable
          query={CollectorsByAdminQuery}
          columns={columns}
          accessor="collectorsByAdmin"
      />
  )
}

export default MyCollectorsTable