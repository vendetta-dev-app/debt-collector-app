import PageTable from '@/components/tables/PageTable'
import AllTransactionsTable from '@/modules/transactions/components/AllTransactionsTable'


const TransactionsPage = () => {
  return (
      <PageTable>
        <PageTable.Header title="Mis Transacciones"/>
        <PageTable.Table>
          <AllTransactionsTable/>
        </PageTable.Table>
      </PageTable>
  )
}

export default TransactionsPage