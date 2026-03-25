import type { LoanNode } from '@types'
import { useState } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useMutation } from '@apollo/client'
import NiceModal from '@ebay/nice-modal-react'
import { Alert, Button } from 'flowbite-react'
import { HiOutlineX, HiOutlineCurrencyDollar, HiOutlineCalendar, HiOutlineCreditCard, HiOutlineDocumentText } from 'react-icons/hi'
import { Text } from '@/components'
import CurrencyCell from '@/components/tables/CurrencyCell'
import CreatePaymentMutation from '@/modules/loans/mutations/CreatePaymentMutation'

interface CreatePaymentModalProps {
  loan: LoanNode
  onPaymentSuccess?: () => void
}

const paymentMethods = [
  { value: 'CASH', label: 'Efectivo', color: 'success' },
  { value: 'TRANSFER', label: 'Transferencia', color: 'info' },
  { value: 'OTHER', label: 'Otro', color: 'gray' },
]

interface FormValues {
  amount: string
  paymentDate: string
  paymentMethod: string
  notes: string
}

const validationSchema = Yup.object({
  amount: Yup.string()
    .required('El monto es requerido')
    .test(
      'is-positive',
      'El monto debe ser mayor a 0',
      (value) => parseFloat(value || '0') > 0
    ),
  paymentDate: Yup.string()
    .required('La fecha es requerida'),
  paymentMethod: Yup.string()
    .required('El método de pago es requerido'),
  notes: Yup.string(),
})

const CreatePaymentModal = NiceModal.create(({ loan, onPaymentSuccess }: CreatePaymentModalProps) => {
  const modal = NiceModal.useModal()
  const [error, setError] = useState<string | null>(null)

  const [createPayment, { loading }] = useMutation(CreatePaymentMutation, {
    onCompleted: (data) => {
      if (data.createPayment?.payment) {
        modal.resolve()
        modal.hide()
        if (onPaymentSuccess) {
          onPaymentSuccess?.()
        }
      }
    },
    onError: (err) => {
      setError(err.message || 'Error al registrar el pago')
    },
  })

  const handleClose = () => {
    modal.hide()
  }
  console.log({ loan })

  const initialValues: FormValues = {
    amount: loan.installmentAmount ? loan.installmentAmount : '',
    paymentDate: new Date().toISOString().split('T')[0],
    paymentMethod: 'CASH',
    notes: '',
  }

  const handleSubmit = async (values: FormValues) => {
    setError(null)

    try {
      await createPayment({
        variables: {
          input: {
            loanId: loan.id,
            amount: parseFloat(values.amount),
            paymentDate: values.paymentDate,
            paymentMethod: values.paymentMethod,
            notes: values.notes || '',
          },
        },
      })
    } catch (err) {
      // Error handling is done in onError callback
    }
  }

  const maxAmount = loan.pendingBalance || 0

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${modal.visible ? 'block' : 'hidden'}`}
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
      <div
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <HiOutlineCurrencyDollar className="text-primary-500" />
            Registrar Pago
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <HiOutlineX className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          {/* Info Card */}
          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-3 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">Balance Pendiente</p>
                <Text size="lg" weight="bold" color="primary">
                  <CurrencyCell value={maxAmount} />
                </Text>
              </div>
              <div className="text-right">
                <p className="text-xs text-primary-600 dark:text-primary-400 font-medium">Loan ID</p>
                <p className="text-sm text-primary-800 dark:text-primary-200 font-mono">
                  {loan?.id?.slice(0, 8)}...
                </p>
              </div>
            </div>
          </div>

          {/* Error Alert */}
          {error && (
            <Alert color="failure" className="mb-4">
              {error}
            </Alert>
          )}

          {/* Form */}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <div className="space-y-4">
                  {/* Amount */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Monto del Pago *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineCurrencyDollar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        name="amount"
                        step="0.01"
                        min="0.01"
                        max={maxAmount}
                        value={values.amount}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="0.00"
                        className={`block w-full pl-10 pr-12 py-2 border rounded-lg leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 sm:text-sm dark:text-white ${
                          errors.amount && touched.amount
                            ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:border-primary-500'
                        }`}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 text-sm">$</span>
                      </div>
                    </div>
                    {errors.amount && touched.amount && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.amount}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Máximo: <CurrencyCell value={maxAmount} />
                    </p>
                  </div>

                  {/* Payment Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Fecha del Pago *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineCalendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        name="paymentDate"
                        value={values.paymentDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        max={new Date().toISOString().split('T')[0]}
                        className={`block w-full pl-10 pr-3 py-2 border rounded-lg leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 sm:text-sm dark:text-white ${
                          errors.paymentDate && touched.paymentDate
                            ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:border-primary-500'
                        }`}
                      />
                    </div>
                    {errors.paymentDate && touched.paymentDate && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.paymentDate}</p>
                    )}
                  </div>

                  {/* Payment Method */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Método de Pago *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <HiOutlineCreditCard className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        name="paymentMethod"
                        value={values.paymentMethod}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`block w-full pl-10 pr-3 py-2 border rounded-lg leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 sm:text-sm dark:text-white ${
                          errors.paymentMethod && touched.paymentMethod
                            ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500'
                            : 'border-gray-300 dark:border-gray-600 focus:border-primary-500'
                        }`}
                      >
                        {paymentMethods.map((method) => (
                          <option key={method.value} value={method.value}>
                            {method.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.paymentMethod && touched.paymentMethod && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.paymentMethod}</p>
                    )}
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Notas
                    </label>
                    <div className="relative">
                      <div className="absolute top-2 left-3 pointer-events-none">
                        <HiOutlineDocumentText className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        name="notes"
                        value={values.notes}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={3}
                        placeholder="Notas adicionales sobre el pago..."
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm dark:text-white resize-none"
                      />
                    </div>
                    {errors.notes && touched.notes && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.notes}</p>
                    )}
                  </div>

                  {/* Summary */}
                  {values.amount && !errors.amount && (
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                      <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">Resumen del Pago</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-green-800 dark:text-green-200">Monto a registrar:</span>
                        <Text size="base" weight="bold" color="success">
                          <CurrencyCell value={parseFloat(values.amount) || 0} />
                        </Text>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-green-700 dark:text-green-300">Nuevo balance pendiente:</span>
                        <Text size="sm" weight="semibold" color="success">
                          <CurrencyCell value={maxAmount - (parseFloat(values.amount) || 0)} />
                        </Text>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t dark:border-gray-700">
                  <Button
                    type="button"
                    color="light"
                    onClick={handleClose}
                    disabled={loading}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Registrando...
                      </>
                    ) : (
                      <>
                        <HiOutlineCurrencyDollar className="mr-2 h-5 w-5" />
                        Registrar Pago
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
})

export default CreatePaymentModal
