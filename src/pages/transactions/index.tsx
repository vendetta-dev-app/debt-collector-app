import PageTable from '@/components/tables/PageTable'
import CollectorTransactionsTable from '@/modules/transactions/components/CollectorTransactionsTable'


const TransactionsPage = () => {
  return (
      <PageTable>
        <PageTable.Header title="Mis Transacciones"/>
        <PageTable.Table>
          <CollectorTransactionsTable/>
        </PageTable.Table>
      </PageTable>
  )
}

export default TransactionsPage