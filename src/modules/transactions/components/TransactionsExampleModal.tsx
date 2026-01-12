import type { FC } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react'
import NiceModal, { type NiceModalHocProps, useModal } from '@ebay/nice-modal-react'

export interface Props extends NiceModalHocProps {
}

const ExportToAlegraModal: FC<Props> = NiceModal.create(() => {
  const modal = useModal()

  return (
      <Modal
          size="3xl"
          show={modal.visible}
          onClose={() => modal.remove()}
      >
        <ModalHeader>
          transactions example modal
        </ModalHeader>
        <ModalBody>
          Example modal
        </ModalBody>
        <ModalFooter className="w-full flex justify-between gap-2">
          <Button color="primary">
            Crear
          </Button>
        </ModalFooter>
      </Modal>
  )
})

export default ExportToAlegraModal