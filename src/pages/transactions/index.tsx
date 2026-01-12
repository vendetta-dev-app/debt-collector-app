import PageTable from '@/components/tables/PageTable'
import TransactionsTable from '@/modules/transactions/components/TransactionsTable'


const TransactionsPage = () => {
  return (
      <PageTable>
        <PageTable.Header title="Mis Transacciones"/>
        <PageTable.Table>
          <TransactionsTable/>
        </PageTable.Table>
      </PageTable>
  )
}

export default TransactionsPage