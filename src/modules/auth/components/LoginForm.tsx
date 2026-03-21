import type { FC, PropsWithChildren } from 'react'
import { useState } from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useMutation } from '@apollo/client'
import { Alert, Button, Spinner } from 'flowbite-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { HiInformationCircle, HiLockClosed, HiMail } from 'react-icons/hi'
import { useAuth } from '@auth/hooks'
import { FormGrid } from '@components'
import { formErrors } from '@constants'
import FormField from '@/components/forms/FormField'
import TokenAuthMutation from '@auth/mutations/tokenAuthMutation'

interface Values {
  email: string
  password: string
}

const LoginForm: FC<PropsWithChildren> = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [roleError, setRoleError] = useState<string | null>(null)

  const [tokenAuth, { error }] = useMutation(TokenAuthMutation, {
    onCompleted: (data) => {
      const from = searchParams.get('from')
      setRoleError(null)
      if (data.tokenAuth?.token) {
        // Verificar que el usuario sea cobrador
        if (!data.tokenAuth.user?.isCollector) {
          // Mostrar error si no es cobrador
          setRoleError('Acceso exclusivo para cobradores')
          return
        }
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
        input: {
          email: values.email,
          password: values.password,
        },
      },
    })
  }

  return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {
          ({ isSubmitting }) => (
              <Form>
                {
                    (error || roleError) &&
                    <Alert color={roleError ? 'warning' : 'failure'} icon={HiInformationCircle} className="mb-6">
                      {roleError || error?.message}
                    </Alert>
                }
                <FormGrid>
                  <FormField
                      label="Correo electrónico"
                      name="email"
                      placeholder="correo@ejemplo.com"
                      icon={HiMail}
                  />
                  <FormField
                      label="Contraseña"
                      name="password"
                      placeholder="••••••••"
                      type="password"
                      icon={HiLockClosed}
                  />
                </FormGrid>

                <Button
                    type="submit"
                    className="w-full mt-8"
                    disabled={isSubmitting}
                >
                  {
                    isSubmitting ?
                        <span className="flex items-center justify-center gap-2">
                          <Spinner size="sm"/>
                          Iniciando sesión...
                        </span>
                        :
                        <span>Iniciar sesión</span>
                  }
                </Button>
              </Form>
          )
        }
      </Formik>
  )
}

export default LoginForm
