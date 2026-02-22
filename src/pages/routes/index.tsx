import PageTable from '@/components/tables/PageTable'
import RoutesCollectorTable from '@/modules/routes/components/RoutesCollectorTable'

const RoutesPage = () => {
  return (
      <PageTable>
        <PageTable.Header title="Mis Rutas">
        </PageTable.Header>
        <PageTable.Table>
          <RoutesCollectorTable/>
        </PageTable.Table>
      </PageTable>
  )
}

export default RoutesPage