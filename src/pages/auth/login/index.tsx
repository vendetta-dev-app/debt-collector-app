import { Card } from 'flowbite-react'
import { Text } from '@components'
import LoginForm from '@auth/components/LoginForm'

const LoginPage = () => {
  return (
      <Card className="p-4">
        <div className="mb-8">
          <Text as="h2" className="text-center" size="xl" weight="bold">
            Bienvenido de nuevo
          </Text>
          <Text color="gray" className="text-center mt-2" size="sm">
            Ingresa tus credenciales para acceder
          </Text>
        </div>
        <LoginForm/>
      </Card>
  )
}

export default LoginPage