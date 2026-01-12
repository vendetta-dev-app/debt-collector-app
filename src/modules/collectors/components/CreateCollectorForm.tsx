import { useState } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { Button } from 'flowbite-react'
import { useMutation } from '@apollo/client'
import { useModal } from '@ebay/nice-modal-react'
import { GraphQLFormattedError } from 'graphql/error'
import { formErrors } from '@constants'
import FormField from '@/components/forms/FormField'
import AuthFormField from '@auth/components/AuthFormField'
import { FormGrid, GraphqlErrorsRenderer } from '@components'
import { numberValidation } from '@/snippets/forms/validations'
import CollectorByAdminQuery from '@/modules/collectors/queries/collectorByAdminQuery'
import CreateCollectorMutation from '@/modules/collectors/mutations/createCollectorMutation'

interface CollectorValues {
  email: string;
  fullName: string;
  phoneNumber1: string;
  phoneNumber2?: string;  // optional
  password1: string;
  password2: string;
}

const CreateCollectorForm = () => {
  const [errors, setErrors] = useState<readonly GraphQLFormattedError[] | null>(null)
  const modal = useModal()

  const [createCollector, { loading }] = useMutation(CreateCollectorMutation, {
    onCompleted: () => {
      modal.remove()
    },
    onError: (error) => {
      setErrors([...error.graphQLErrors])
      console.log(error.graphQLErrors)
    },
    refetchQueries: [CollectorByAdminQuery],
  })

  const initialValues = {
    email: '',
    fullName: '',
    phoneNumber1: '',
    phoneNumber2: '',
    password1: '',
    password2: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
        .email(formErrors.email)
        .required(formErrors.required),
    fullName: Yup.string()
        .required(formErrors.required),
    phoneNumber1: Yup.string()
        .matches(numberValidation, formErrors.number)
        .required(formErrors.required),
    phoneNumber2: Yup.string()
        .matches(numberValidation, formErrors.number)
        .nullable(),
    password1: Yup.string()
        .required(formErrors.required),
    password2: Yup.string()
        .oneOf([Yup.ref('password1')], formErrors.passwordMatch)
        .required(formErrors.required),
  })

  const onSubmit = (values: CollectorValues) => {
    console.log(values)
    createCollector({
      variables: {
        email: values.email,
        fullName: values.fullName,
        phoneNumber1: values.phoneNumber1,
        phoneNumber2: values.phoneNumber2,
        password: values.password1,
      },
    })

  }

  return (
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
          () => (
              <Form>
                <FormGrid>
                  <FormGrid cols={2}>
                    <FormField label="Nombre Completo" name="fullName"/>
                    <FormField label="Correo" name="email" type="email"/>
                  </FormGrid>
                  <FormGrid cols={2}>
                    <FormField label="Numero de telefono" name="phoneNumber1"/>
                    <FormField label="Numero de telefono 2 (opcional)" name="phoneNumber2"/>
                  </FormGrid>
                  <FormGrid cols={2}>
                    <AuthFormField label="Contraseña" name="password1" type="password"/>
                    <AuthFormField label="Confirmar contraseña" name="password2" type="password"/>
                  </FormGrid>
                  <GraphqlErrorsRenderer errors={errors?.map((e) => e.message) ?? null}/>
                  <div className="w-full flex justify-end pt-2">
                    <Button as="button" disabled={loading} type="submit">
                      {loading ? '...Creando' : 'Crear Cobrador'}
                    </Button>
                  </div>
                </FormGrid>
              </Form>
          )
        }
      </Formik>
  )
}

export default CreateCollectorForm