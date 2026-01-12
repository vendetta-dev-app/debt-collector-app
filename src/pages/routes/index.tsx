import { Button } from 'flowbite-react'
import NiceModal from '@ebay/nice-modal-react'
import PageTable from '@/components/tables/PageTable'
import MyRoutesTable from '@/modules/routes/components/MyRoutesTable'
import CreateRouteModal from '@/modules/routes/components/CreateRouteModal'

const RoutesPage = () => {
  return (
      <PageTable>
        <PageTable.Header title="Mis Rutas">
          <Button className="max-md:w-full" onClick={() => NiceModal.show(CreateRouteModal)}>
            Crear Ruta
          </Button>
        </PageTable.Header>
        <PageTable.Table>
          <MyRoutesTable/>
        </PageTable.Table>
      </PageTable>
  )
}

export default RoutesPage