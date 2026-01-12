import type {FC} from "react"
import {Modal, ModalBody, ModalHeader} from "flowbite-react"
import NiceModal, {type NiceModalHocProps, useModal} from "@ebay/nice-modal-react"
import CreateManagerForm from "@/modules/responsibles/components/CreateManagerForm"

const CreateManagerModal: FC<NiceModalHocProps> = NiceModal.create(() => {
        const modal = useModal()

        return (
            <Modal
                size="3xl"
                show={modal.visible}
                onClose={() => modal.remove()}>
                <ModalHeader>
                    Crear responsable
                </ModalHeader>
                <ModalBody>
                    <CreateManagerForm/>
                </ModalBody>
            </Modal>
        )
    }
)

export default CreateManagerModal