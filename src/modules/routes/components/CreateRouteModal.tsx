import NiceModal, {type NiceModalHocProps, useModal} from "@ebay/nice-modal-react";
import {Modal, ModalBody, ModalHeader} from "flowbite-react";
import type {FC} from "react";
import CreateRouteForm from "@/modules/routes/components/CreateRouteForm";

export interface Props extends NiceModalHocProps {
}

const CreateRouteModal:FC<Props>  = NiceModal.create(() => {
    const modal = useModal()

    return (
        <Modal
            size="3xl"
            show={modal.visible}
            onClose={() => modal.remove()}>
            <ModalHeader>
                Crear Ruta
            </ModalHeader>
            <ModalBody>
                <CreateRouteForm />
            </ModalBody>
        </Modal>
    )
})

export default CreateRouteModal