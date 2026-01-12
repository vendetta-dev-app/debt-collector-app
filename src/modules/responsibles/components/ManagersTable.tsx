import type {ManagerNodeEdge} from '@types'
import type {ColumnDef} from '@tanstack/react-table'
import {useMemo} from 'react'
import {FaExternalLinkAlt} from 'react-icons/fa'
import QueryTable from '@/components/tables/QueryTable'
import ManagersByAdminQuery from "@/modules/responsibles/queries/ManagersByAdminQuery"
import NiceModal from "@ebay/nice-modal-react";
import EditManagerModal from "@/modules/responsibles/components/EditManagerModal";

const ManagersTable = () => {
    const columns = useMemo<ColumnDef<ManagerNodeEdge>[]>(
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
                enableSorting: false,
                accessorKey: 'node.user.email',
            },
            {
                id: 'phoneNumber1',
                header: 'Ciudad',
                enableSorting: false,
                accessorKey: 'node.user.phoneNumber1',
            },
            {
                id: 'actions',
                header: '',
                size: 50,
                cell: () => (
                    <button
                        className="flex items-center gap-2 link"
                        onClick={() => NiceModal.show(EditManagerModal)}
                    >
                        Editar
                        <FaExternalLinkAlt/>
                    </button>
                ),
            },
        ],
        [],
    )

    return (
        <QueryTable
            query={ManagersByAdminQuery}
            columns={columns}
            accessor="managersByAdmin"
        />
    )
}

export default ManagersTable