import {FC} from "react";
import NiceModal, {NiceModalHocProps, useModal} from "@ebay/nice-modal-react";
import {Modal, ModalBody, ModalHeader} from "flowbite-react";
import {CollectorNode} from "@types";
import EditCollectorForm from "@/modules/collectors/components/EditCollectorForm";

interface Props extends NiceModalHocProps {
  node: CollectorNode
}

const EditCollectorModal: FC<Props> = NiceModal.create(({node}) => {
  const modal = useModal()
  return (
    <Modal
      size="3xl"
      show={modal.visible}
      onClose={() => modal.remove()}>
      <ModalHeader>
        {node.user.fullName}
      </ModalHeader>
      <ModalBody>
        <EditCollectorForm node={node}/>
      </ModalBody>
    </Modal>
  )
})

export default EditCollectorModal