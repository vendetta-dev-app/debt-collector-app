import {Button} from 'flowbite-react'
import NiceModal from '@ebay/nice-modal-react'
import PageTable from '@/components/tables/PageTable'
import ManagersTable from "@/modules/responsibles/components/ManagersTable"
import CreateManagerModal from "@/modules/responsibles/components/CreateManagerModal"

const ResponsiblePage = () => {
    return (
        <PageTable>
            <PageTable.Header title="Responsables">
                <Button className='max-md:w-full' onClick={() => NiceModal.show(CreateManagerModal)}>
                    Crear responsable
                </Button>
            </PageTable.Header>
            <PageTable.Table>
                <ManagersTable/>
            </PageTable.Table>
        </PageTable>
    )
}

export default ResponsiblePage