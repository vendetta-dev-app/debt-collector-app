import type { FC } from 'react'
import { useMemo, useState } from 'react'
import * as Yup from 'yup'
import { Form, Formik, FormikHelpers } from 'formik'
import { useMutation, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { Button, Spinner } from 'flowbite-react'
import { HiOutlineCalculator, HiOutlineCash, HiOutlineInformationCircle } from 'react-icons/hi'
import { useToast } from '@hooks'
import { FormGrid, Text } from '@/components'
import FormField from '@/components/forms/FormField'
import CurrencyCell from '@/components/tables/CurrencyCell'
import CreateLoanMutation from '@/modules/loans/mutations/CreateLoanMutation'
import ClientsByCollectorQuery from '@/modules/clients/queries/ClientsByCollectorQuery'

// Payment frequency options
const paymentFrequencies = [
  { value: 'DAILY', label: 'Diaria' },
  { value: 'WEEKLY', label: 'Semanal' },
  { value: 'MONTHLY', label: 'Mensual' },
]

interface Values {
  client_id: string
  amount: string
  installments: number
  payment_frequency: string
}

interface CreateLoanFormProps {
  onSuccess?: () => void
  onCancel?: () => void
}

const validationSchema = Yup.object().shape({
  client_id: Yup.string()
      .required('El cliente es requerido'),
  amount: Yup.string()
      .required('El monto es requerido')
      .test(
          'is-positive',
          'El monto debe ser mayor a 0',
          (value) => parseFloat(value || '0') > 0,
      ),
  installments: Yup.number()
      .required('El número de cuotas es requerido')
      .min(1, 'Mínimo 1 cuota')
      .max(90, 'Máximo 90 cuotas'),
  payment_frequency: Yup.string()
      .required('La frecuencia de pago es requerida')
      .oneOf(['DAILY', 'WEEKLY', 'MONTHLY'], 'Frecuencia no válida'),
})

const CreateLoanForm: FC<CreateLoanFormProps> = ({ onSuccess, onCancel }) => {
  const toast = useToast()
  const navigate = useNavigate()
  const [selectedClientId, setSelectedClientId] = useState<string>('')

  // Fetch clients for the collector
  const { data: clientsData, loading: clientsLoading } = useQuery(ClientsByCollectorQuery, {
    fetchPolicy: 'cache-and-network',
  })

  const clients = useMemo(() => {
    return clientsData?.clientsByCollector?.edges?.map((edge: any) => edge.node) || []
  }, [clientsData])

  const selectedClient = useMemo(() => {
    return clients.find((c: any) => c.id === selectedClientId)
  }, [clients, selectedClientId])

  const [createLoan, { loading }] = useMutation(CreateLoanMutation, {
    onCompleted: (data) => {
      if (data.createLoan?.loan) {
        toast('Préstamo creado exitosamente. Queda pendiente de aprobación.', 'success')
        if (onSuccess) {
          onSuccess()
        } else {
          navigate('/loans')
        }
      }
    },
    onError: (err) => {
      toast(err.message || 'Error al crear el préstamo', 'error')
    },
    refetchQueries: ['LoansByCollector', 'LoansByRoute', 'LoansByClient'],
  })

  const initialValues: Values = {
    client_id: '',
    amount: '',
    installments: 4,
    payment_frequency: 'WEEKLY',
  }

  const onSubmit = async (values: Values, helpers: FormikHelpers<Values>) => {
    // Get routeId from selected client
    const loanRouteId = selectedClient?.route?.id
    if (!loanRouteId) {
      toast('No se pudo determinar la ruta del cliente', 'error')
      return
    }

    await createLoan({
      variables: {
        input: {
          routeId: loanRouteId,
          clientId: values.client_id,
          amount: parseFloat(values.amount),
          installments: values.installments,
          paymentFrequency: values.payment_frequency,
        },
      },
    })
  }

  // Calculate loan summary
  const calculateSummary = (amount: string, installments: number) => {
    const principal = parseFloat(amount) || 0
    const interestRate = 20 // Fixed at 20%
    const totalAmount = principal + (principal * interestRate / 100)
    const installmentAmount = installments > 0 ? totalAmount / installments : 0
    return {
      principal,
      totalAmount,
      installmentAmount,
      interest: totalAmount - principal,
    }
  }

  return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} enableReinitialize>
        {({ values, setFieldValue }) => {
          const summary = calculateSummary(values.amount, values.installments)

          return (
              <Form>
                {/* Pending approval notice */}
                <div
                    className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 mb-4">
                  <div className="flex items-start gap-2">
                    <HiOutlineInformationCircle
                        className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0"/>
                    <div className="text-sm text-amber-800 dark:text-amber-200">
                      <p className="font-medium">El préstamo quedará pendiente de aprobación</p>
                      <p className="text-xs mt-1 opacity-80">Una vez creado, el administrador deberá aprobarlo antes de
                        que se desembolse.</p>
                    </div>
                  </div>
                </div>

                <FormGrid>
                  {/* Client Selection */}
                  <div className="col-span-full">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Cliente *
                    </label>
                    <select
                        name="client_id"
                        value={values.client_id}
                        onChange={(e) => {
                          setFieldValue('client_id', e.target.value)
                          setSelectedClientId(e.target.value)
                        }}
                        disabled={clientsLoading}
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5"
                    >
                      <option value="">Seleccionar cliente...</option>
                      {clients.map((client: any) => (
                          <option key={client.id} value={client.id}>
                            {client.user?.fullName} - {client.alias}
                          </option>
                      ))}
                    </select>
                    {selectedClient && (
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                          Ruta: {selectedClient.route?.name}
                        </p>
                    )}
                  </div>

                  {/* Amount */}
                  <FormField
                      name="amount"
                      label="Monto del Préstamo *"
                      placeholder="0.00"
                      type="number"
                      step="0.01"
                      min="0.01"
                      icon={HiOutlineCash}
                  />

                  {/* Installments */}
                  <FormField
                      name="installments"
                      label="Número de Cuotas * (1-90)"
                      type="number"
                      min="1"
                      max="90"
                      icon={HiOutlineCalculator}
                  />
                </FormGrid>

                {/* Payment Frequency */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Frecuencia de Pago *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {paymentFrequencies.map((freq) => (
                        <button
                            key={freq.value}
                            type="button"
                            onClick={() => setFieldValue('payment_frequency', freq.value)}
                            className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                                values.payment_frequency === freq.value
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                        >
                          {freq.label}
                        </button>
                    ))}
                  </div>
                </div>

                {/* Interest Rate (Fixed at 20%) */}
                <div className="mt-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Tasa de interés:</span>
                    <Text size="base" weight="bold" color="primary">
                      20%
                    </Text>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    Configuración fija por el momento
                  </p>
                </div>

                {/* Summary */}
                {summary.principal > 0 && (
                    <div
                        className="mt-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-3">
                      <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mb-2">Resumen del
                        Préstamo</p>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-primary-800 dark:text-primary-200">Monto principal:</span>
                          <Text size="sm" color="primary">
                            <CurrencyCell value={summary.principal}/>
                          </Text>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-primary-800 dark:text-primary-200">Interés (20%):</span>
                          <Text size="sm" color="primary">
                            <CurrencyCell value={summary.interest}/>
                          </Text>
                        </div>
                        <div
                            className="flex justify-between items-center border-t border-primary-200 dark:border-primary-700 pt-1 mt-1">
                          <span className="text-sm text-primary-800 dark:text-primary-200 font-medium">Total a
                            pagar:</span>
                          <Text size="base" weight="bold" color="primary">
                            <CurrencyCell value={summary.totalAmount}/>
                          </Text>
                        </div>
                        {summary.installmentAmount > 0 && (
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-primary-700 dark:text-primary-300">Cuota
                                ({values.installments}x):</span>
                              <Text size="sm" weight="semibold" color="primary">
                                <CurrencyCell value={summary.installmentAmount}/>
                              </Text>
                            </div>
                        )}
                      </div>
                    </div>
                )}

                {/* Botones de acción */}
                <div className="flex gap-3 pt-6">
                  <Button type="submit" disabled={loading || !values.client_id || !values.amount} className="flex-1">
                    {loading ? (
                        <>
                          <Spinner size="sm" className="mr-2"/>
                          Creando...
                        </>
                    ) : (
                        'Crear Préstamo'
                    )}
                  </Button>
                  {onCancel && (
                      <Button type="button" color="light" onClick={onCancel} disabled={loading}>
                        Cancelar
                      </Button>
                  )}
                </div>
              </Form>
          )
        }}
      </Formik>
  )
}

export default CreateLoanForm
