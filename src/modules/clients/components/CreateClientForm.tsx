import type { FC } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { FaMapPin } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { Button, Spinner } from 'flowbite-react'
import { HiOutlineHome, HiOutlineIdentification, HiOutlinePhone, HiOutlineUser, HiX } from 'react-icons/hi'
import { useToast } from '@hooks'
import { FormGrid } from '@/components'
import FormField from '@/components/forms/FormField'
import CreateClientMutation from '@clients/mutations/CreateClientMutation'
import { formatChileanPhone, formatRUT, validateChileanPhone, validateRUT, cleanChileanPhone, cleanRUT } from '@snippets/forms/clientValidations'

interface Values {
  full_name: string
  identity_document: string
  alias?: string
  phone_number_1: string
  phone_number_2?: string
  address_line_1: string
  address_line_2?: string
  neighborhood: string
  city?: string
  address_reference?: string
}

interface CreateClientFormProps {
  onSuccess?: () => void
  onCancel?: () => void
}

const validationSchema = Yup.object().shape({
  full_name: Yup.string()
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .required('El nombre es requerido'),
  identity_document: Yup.string()
      .test('dni', 'DNI inválido. Formato: XX.XXX.XXX-X', (value) => {
        if (!value) return false
        const clean = value.replace(/\./g, '').replace(/-/g, '')
        return validateRUT(clean)
      })
      .required('El DNI es requerido'),
  alias: Yup.string().optional(),
  phone_number_1: Yup.string()
      .test('chilean-phone', 'Teléfono inválido. Formato: 9 XXXX XXXX', (value) => {
        if (!value) return false
        return validateChileanPhone(value)
      })
      .required('El teléfono principal es requerido'),
  phone_number_2: Yup.string()
      .test('chilean-phone', 'Teléfono inválido', (value) => {
        if (!value) return true
        return validateChileanPhone(value)
      })
      .optional(),
  address_line_1: Yup.string()
      .min(5, 'La dirección debe tener al menos 5 caracteres')
      .required('La dirección es requerida'),
  address_line_2: Yup.string().optional(),
  neighborhood: Yup.string()
      .min(2, 'La comuna/barrio debe tener al menos 2 caracteres')
      .required('La comuna/barrio es requerido'),
  city: Yup.string().optional(),
  address_reference: Yup.string().optional(),
})

const CreateClientForm: FC<CreateClientFormProps> = ({ onSuccess, onCancel }) => {
  const toast = useToast()
  const navigate = useNavigate()

  const [createClient, { loading }] = useMutation(CreateClientMutation, {
    onCompleted: () => {
      toast('Cliente creado exitosamente', 'success')
      if (onSuccess) {
        onSuccess()
      } else {
        navigate('/clients')
      }
    },
    onError: (err) => {
      toast(err.message || 'Error al crear cliente', 'error')
    },
  })

  const initialValues: Values = {
    full_name: '',
    identity_document: '',
    alias: '',
    phone_number_1: '',
    phone_number_2: '',
    address_line_1: '',
    address_line_2: '',
    neighborhood: '',
    city: '',
    address_reference: '',
  }

  const onSubmit = async (values: Values) => {
    await createClient({
      variables: {
        input: {
          fullName: values.full_name,
          identityDocument: cleanRUT(values.identity_document),
          alias: values.alias || null,
          phoneNumber1: cleanChileanPhone(values.phone_number_1),
          phoneNumber2: values.phone_number_2 ? cleanChileanPhone(values.phone_number_2) : null,
          addressLine1: values.address_line_1,
          addressLine2: values.address_line_2 || null,
          neighborhood: values.neighborhood,
          city: values.city || null,
          addressReference: values.address_reference || null,
        },
      },
    })
  }

  return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ setFieldValue }) => (
            <Form>
              <FormGrid>
                {/* Nombre completo */}
                <FormField
                    name="full_name"
                    label="Nombre completo"
                    placeholder="Juan Pérez Pérez"
                    icon={HiOutlineUser}
                />

                {/* DNI */}
                <FormField
                    name="identity_document"
                    label="DNI"
                    placeholder="12345678-9"
                    icon={HiOutlineIdentification}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      const value = e.target.value
                      if (value && value.length >= 8) {
                        setFieldValue('identity_document', formatRUT(value))
                      }
                    }}
                />
                <p className="col-span-full text-xs text-gray-500 dark:text-gray-400 -mt-3 mb-2">
                  Formato: XX.XXX.XXX-X (se formatea automáticamente al salir del campo)
                </p>

                {/* Alias (opcional) */}
                <FormField
                    name="alias"
                    label="Alias"
                    placeholder="Juancho"
                />

                {/* Teléfono principal */}
                <FormField
                    name="phone_number_1"
                    label="Teléfono principal"
                    placeholder="9 1234 5678"
                    icon={HiOutlinePhone}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      const value = e.target.value
                      if (value && value.length >= 9) {
                        setFieldValue('phone_number_1', formatChileanPhone(value))
                      }
                    }}
                />

                {/* Teléfono secundario (opcional) */}
                <FormField
                    name="phone_number_2"
                    label="Teléfono secundario"
                    placeholder="9 8765 4321"
                    icon={HiOutlinePhone}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      const value = e.target.value
                      if (value && value.length >= 9) {
                        setFieldValue('phone_number_2', formatChileanPhone(value))
                      }
                    }}
                />

                {/* Comuna/Barrio */}
                <FormField
                    name="neighborhood"
                    label="Comuna/Barrio"
                    placeholder="Providencia"
                    icon={FaMapPin}
                />

                {/* Ciudad (opcional) */}
                <FormField
                    name="city"
                    label="Ciudad"
                    placeholder="Santiago"
                />

                {/* Dirección línea 1 */}
                <FormField
                    name="address_line_1"
                    label="Dirección"
                    placeholder="Calle Principal #123, Depto 402"
                    icon={HiOutlineHome}
                />

                {/* Dirección línea 2 (opcional) */}
                <FormField
                    name="address_line_2"
                    label="Información adicional"
                    placeholder="Block C, Piso 4"
                />

                {/* Referencia (opcional) */}
                <FormField
                    name="address_reference"
                    label="Referencia del lugar"
                    placeholder="Edificio color azul, cerca de la plaza"
                />
                <p className="col-span-full text-xs text-gray-500 dark:text-gray-400 -mt-3 mb-2">
                  Puntos de referencia para ayudar al cobrador a encontrar el lugar
                </p>
              </FormGrid>

              {/* Botones de acción */}
              <div className="flex gap-3 pt-4">
                <Button type="submit" disabled={loading} className="flex-1">
                  {loading ? (
                      <>
                        <Spinner size="sm" className="mr-2"/>
                        Creando...
                      </>
                  ) : (
                      'Crear Cliente'
                  )}
                </Button>
                {onCancel && (
                    <Button type="button" color="light" onClick={onCancel} disabled={loading}>
                      <HiX className="mr-2 h-5 w-5"/>
                      Cancelar
                    </Button>
                )}
              </div>
            </Form>
        )}
      </Formik>
  )
}

export default CreateClientForm
