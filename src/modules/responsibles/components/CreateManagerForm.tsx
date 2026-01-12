import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useMutation } from '@apollo/client'
import { useModal } from '@ebay/nice-modal-react'
import { Alert, Button, Spinner } from 'flowbite-react'
import { FormGrid } from '@components'
import { formErrors } from '@constants'
import FormField from '@/components/forms/FormField'
import ManagersByAdminQuery from '@/modules/responsibles/queries/ManagersByAdminQuery'
import CreateManagerMutation from '@/modules/responsibles/mutations/CreateManagerMutation'
import { emailValidation, numberValidation } from '@/snippets/forms/validations'

interface Values {
  email: string
  fullName: string
  phoneNumber1: string
  phoneNumber2: string
  password: string
}

const CreateManagerForm = () => {
  const modal = useModal()

  const [createManager, { loading, error }] = useMutation(CreateManagerMutation, {
    onCompleted: () => {
      modal.remove()
    },
    refetchQueries: [ManagersByAdminQuery],
  })

  const initialValues: Values = {
    email: '',
    fullName: '',
    phoneNumber1: '',
    phoneNumber2: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().matches(emailValidation, formErrors.email).required(formErrors.required),
    fullName: Yup.string().required(formErrors.required),
    phoneNumber1: Yup.string().matches(numberValidation, formErrors.number).required(formErrors.required),
    phoneNumber2: Yup.string().matches(numberValidation, formErrors.number),
    password: Yup.string().required(formErrors.required),
    verifyPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], formErrors.passwordMatch)
        .required(formErrors.required),
  })

  const onSubmit = async (values: Values) => {
    console.log(values)
    await createManager({
      variables: {
        input: {
          email: values.email,
          fullName: values.fullName,
          phoneNumber1: values.phoneNumber1,
          phoneNumber2: values.phoneNumber2,
          password: values.password,
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
                <FormField label="Correo" name="email"/>
                <FormField label="Nombre completo" name="fullName"/>
                <FormField label="Número telefónico 1" name="phoneNumber1"/>
                <FormField label="Número telefónico 2" name="phoneNumber2"/>
                <FormField label="Contrasenya" name="password"/>
                <FormField label="Verificar Contrasenya" name="verifyPassword"/>
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
                        'Crear responsable'
                  }
                </Button>
              </div>
            </Form>
        )}
      </Formik>
  )
}

export default CreateManagerForm
