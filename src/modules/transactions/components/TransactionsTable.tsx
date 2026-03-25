import type {TransactionNodeEdge} from "@types";
import type {ColumnDef} from '@tanstack/react-table'
import {useMemo} from 'react'
import QueryTable from "@/components/tables/QueryTable";
import TransactionsQuery from "@/modules/transactions/queries/TransactionsQuery";
import { formatDateTime } from '@/snippets/dates'

interface User {
    name: string
}

const TransactionsTable = () => {
    const columns = useMemo<ColumnDef<TransactionNodeEdge>[]>(
        () => [
            {
                id: 'created',
                header: 'Fecha',
                size: 200,
                cell: info => formatDateTime(info.row.original.node?.createdAt),
            },
            {
                id: 'description',
                header: 'Descripción',
                accessorKey: 'node.description',
                size: 200,
            },
            {
                id: 'type',
                header: 'Descripción',
                accessorKey: 'node.transactionType',
            },
            {
                id: 'amount',
                header: 'Valor',
                accessorKey: 'node.amount',
            },
        ],
        [],
    )
    return (
        <QueryTable
            query={TransactionsQuery}
            columns={columns}
            accessor="transactions"
        />
    )
}

export default TransactionsTable