import type {FC} from "react"
import type {ManagerNode} from "@types"
import {Modal, ModalBody, ModalHeader} from "flowbite-react"
import NiceModal, {NiceModalHocProps, useModal} from "@ebay/nice-modal-react"

interface Props extends NiceModalHocProps {
    node?: ManagerNode
}

const EditManagerModal: FC<Props> = NiceModal.create(({node}) => {
    const modal = useModal()
    return (
        <Modal
            size="3xl"
            show={modal.visible}
            onClose={() => modal.remove()}>
            <ModalHeader>
                {node?.user?.fullName ?? "UPS!!"}
            </ModalHeader>
            <ModalBody>
                {/*<EditManagerForm node={node}/>*/}
                Aun no existe la mutacion para editar davis :(
            </ModalBody>
        </Modal>
    )
})

export default EditManagerModal