import NiceModal, {type NiceModalHocProps, useModal} from "@ebay/nice-modal-react";
import {FC} from "react";
import {Modal, ModalBody, ModalHeader} from "flowbite-react";
import CreateCollectorForm from "@/modules/collectors/components/CreateCollectorForm";

const CreateCollectorModal: FC<NiceModalHocProps> = NiceModal.create(() => {
    const modal = useModal()

    return (
      <Modal
        size="3xl"
        show={modal.visible}
        onClose={() => modal.remove()}>
        <ModalHeader>
          Crear Cobrador
        </ModalHeader>
        <ModalBody>
          <CreateCollectorForm/>
        </ModalBody>
      </Modal>
    )
  }
)

export default CreateCollectorModal