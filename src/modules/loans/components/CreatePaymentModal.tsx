import NiceModal from '@ebay/nice-modal-react'
import { HiOutlineX } from 'react-icons/hi'

interface CreatePaymentModalProps {
  loanId: string
  clientId?: string
  pendingBalance?: number
  onPaymentSuccess?: () => void
}

const CreatePaymentModal = NiceModal.create(({ loanId, clientId, pendingBalance, onPaymentSuccess }: CreatePaymentModalProps) => {
  const modal = NiceModal.useModal()

  const handleClose = () => {
    modal.remove()
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${modal.visible ? 'block' : 'hidden'}`}
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
      <div
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Registrar Pago
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <HiOutlineX className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          <div className="text-center py-8 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Loan ID: {loanId?.slice(0, 8)}...
            </p>
            <p className="text-sm text-yellow-800 dark:text-yellow-200 mt-2">
              Pendiente: ${pendingBalance?.toFixed(2)}
            </p>
            <p className="text-xs text-yellow-600 dark:text-yellow-300 mt-4">
              Este modal se implementará completamente en la Task 5: Register Payment Modal
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-2 p-4 border-t dark:border-gray-700">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
})

export default CreatePaymentModal

