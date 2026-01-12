import PageTable from "@/components/tables/PageTable";
import {Button} from "flowbite-react";
import NiceModal from "@ebay/nice-modal-react";
import CreateCollectorModal from "@/modules/collectors/components/CreateCollectorModal";
import MyCollectorsTable from "@/modules/collectors/components/MyCollectorsTable";

const CollectorsPage = () => {
    return (
        <PageTable>
            <PageTable.Header title="Mis Cobradores">
                <Button className='max-md:w-full' onClick={() => NiceModal.show(CreateCollectorModal)}>
                    Crear Cobrador
                </Button>
            </PageTable.Header>
            <PageTable.Table>
                <MyCollectorsTable/>
            </PageTable.Table>
        </PageTable>
    )
}

export default CollectorsPage