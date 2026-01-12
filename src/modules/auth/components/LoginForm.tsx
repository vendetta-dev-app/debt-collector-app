import { FormGrid, Text } from '@/components'
import { useMutation } from '@apollo/client'
import AuthFormField from '@auth/components/AuthFormField'
import { useAuth } from '@auth/hooks'
import TokenAuthMutation from '@auth/mutations/tokenAuthMutation'
import { formErrors } from '@constants'
import { Alert, Button } from 'flowbite-react'
import { Form, Formik } from 'formik'
import { FC, PropsWithChildren } from 'react'
import { HiInformationCircle } from 'react-icons/hi'
import { useNavigate, useSearchParams } from 'react-router-dom'
import * as Yup from 'yup'

interface Values {
  email: string
  password: string
}

const LoginForm: FC<PropsWithChildren> = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [tokenAuth, { error }] = useMutation(TokenAuthMutation, {
    onCompleted: (data) => {
      const from = searchParams.get('from')
      if (data.tokenAuth?.token) {
        login(data.tokenAuth)
        navigate(from ? from : '/')
      }
    },
  })

  const validationSchema = Yup.object({
    email: Yup.string().required(formErrors.required),
    password: Yup.string().required(formErrors.required),
  })

  const initialValues = {
    email: import.meta.env.VITE_EMAIL ?? '',
    password: import.meta.env.VITE_PASSWORD ?? '',
  }

  const onSubmit = async (values: Values) => {
    await tokenAuth({
      variables: {
        email: values.email,
        password: values.password,
      },
    })
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {
        ({ isSubmitting }) => (
          <Form>
            <Text as="h5" className="text-center" size="2xl" weight="extrabold">
              Iniciar sesión
            </Text>
            <Text color="gray" className="mb-12 text-center" weight="medium">
              Inicia sesión con tu cuenta de cobrador
            </Text>
            {
              error &&
              <Alert color="warning" icon={HiInformationCircle} className="mb-8">
                {error?.message}
              </Alert>
            }
            <FormGrid>
              <AuthFormField
                label="Correo"
                name="email"
                id="email"
                type="text"
                placeholder="Username" />
              <AuthFormField
                label="Password"
                name="password"
                id="password"
                type="password"
                placeholder="Password" />
            </FormGrid>
            <Button
              className="w-full mt-8"
              disabled={isSubmitting}
              type="submit">
              {isSubmitting ? 'Iniciando...' : 'Iniciar Sesion'}
            </Button>
          </Form>
        )
      }
    </Formik>
  )
}

export default LoginForm