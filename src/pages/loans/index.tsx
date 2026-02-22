import PageTable from '@/components/tables/PageTable'
import LoansCollectorTable from '@/modules/loans/components/LoansCollectorTable'

const LoansPage = () => {
  return (
    <PageTable>
      <PageTable.Header title="Mis Préstamos">
      </PageTable.Header>
      <PageTable.Table>
        <LoansCollectorTable/>
      </PageTable.Table>
    </PageTable>
  )
}

export default LoansPage
