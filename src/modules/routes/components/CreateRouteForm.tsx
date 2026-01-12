import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useMutation } from '@apollo/client'
import { useModal } from '@ebay/nice-modal-react'
import { Alert, Button, Spinner } from 'flowbite-react'
import { FormGrid } from '@components'
import { formErrors } from '@constants'
import FormField from '@/components/forms/FormField'
import CitySelectInput from '@/components/forms/CitySelectInput'
import CollectorSelectInput from '@/components/forms/CollectorSelectInput'
import RoutesByAdminQuery from '@/modules/routes/queries/RoutesByAdminQuery'
import ManagerSelectInput from '@/components/forms/selects/ManagerSelectInput'
import CreateRouteMutation from '@/modules/routes/mutattions/createRouteMutation'

interface Values {
  name: string
  city: string
  collector: string
  managerId: string
  initialValue: number
}

const CreateRouteForm = () => {
  const modal = useModal()

  const [createRoute, { loading, error }] = useMutation(CreateRouteMutation, {
    onCompleted: () => {
      modal.remove()
    },
    refetchQueries: [RoutesByAdminQuery],
  })

  const initialValues: Values = {
    name: '',
    city: '',
    collector: '',
    managerId: '',
    initialValue: 0,
  }

  const validationSchema = Yup.object({
    name: Yup.string()
        .required(formErrors.required)
        .min(3, 'El nombre debe tener al menos 3 caracteres'),
    city: Yup.string().required(formErrors.required),
    collector: Yup.string().required(formErrors.required),
    managerId: Yup.string().required(formErrors.required),
    initialValue: Yup.number()
        .typeError('El valor inicial debe ser un número')
        .required(formErrors.required)
        .min(0, 'El valor inicial no puede ser negativo'),
  })

  const onSubmit = async (values: Values) => {
    await createRoute({
      variables: {
        input: {
          managerId: values.managerId,
          name: values.name,
          cityId: values.city,
          collectorId: values.collector,
          initialValue: values.initialValue,
        },
      },
    })
  }

  return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {() => (
            <Form>
              {
                  error &&
                  <Alert color="failure" className="mb-4">
                    {error?.message}
                  </Alert>
              }
              <FormGrid cols={2}>
                <FormField label="Nombre" name="name"/>
                <FormField
                    label="Ciudad"
                    name="city"
                    component={CitySelectInput}
                />
                <FormField
                    label="Cobrador"
                    name="collector"
                    component={CollectorSelectInput}
                />
                <FormField
                    label="Responsable"
                    name="managerId"
                    component={ManagerSelectInput}
                />
                <FormField
                    label="Valor Inicial"
                    name="initialValue"
                    type="number"/>
              </FormGrid>
              <div className="w-full flex justify-end pt-2">
                <Button disabled={loading} className="flex items-center gap-2" type="submit">
                  {
                    loading ?
                        <>
                          <Spinner size="sm" aria-label="Info spinner example" light/>
                          Creando...
                        </>
                        :
                        'Crear ruta'
                  }
                </Button>
              </div>
            </Form>
        )}
      </Formik>
  )
}

export default CreateRouteForm
