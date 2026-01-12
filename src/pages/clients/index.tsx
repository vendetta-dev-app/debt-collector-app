// import { Button } from 'flowbite-react'
import PageTable from '@/components/tables/PageTable'
import ClientsTable from '@/modules/clients/components/ClientsTable'

const ClientsPage = () => {
  return (
      <PageTable>
        <PageTable.Header title="Mis Clientes">
          {/*<Button className="max-md:w-full">*/}
          {/*  Crear cliente*/}
          {/*</Button>*/}
        </PageTable.Header>
        <PageTable.Table>
          <ClientsTable/>
        </PageTable.Table>
      </PageTable>
  )
}

export default ClientsPage