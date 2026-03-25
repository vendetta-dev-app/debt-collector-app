import { Link } from 'react-router-dom'
import { Alert, Button } from 'flowbite-react'
import { HiOutlineCash, HiArrowLeft, HiOutlineExclamationCircle, HiOutlineCollection } from 'react-icons/hi'
import { Text } from '@components'
import useMe from '@auth/hooks/useMe'
import CreateLoanForm from '@/modules/loans/components/CreateLoanForm'

const CreateLoanPage = () => {
  const me = useMe()
  const hasRoute = !!me?.collectorProfile?.route

  if (!hasRoute) {
    return (
      <div className="p-4 sm:p-4 space-y-4 pb-20">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Link
            to="/loans"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <HiArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400"/>
          </Link>
          <div className="flex items-center gap-2">
            <HiOutlineCash className="w-6 h-6 text-primary-600 dark:text-primary-400"/>
            <Text size="lg" weight="bold">
              Nuevo Préstamo
            </Text>
          </div>
        </div>

        {/* Alert */}
        <Alert color="warning" icon={HiOutlineExclamationCircle} className="mt-6">
          <div className="space-y-2">
            <p className="font-medium">No tienes ruta asignada</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Para crear préstamos, necesitas que un administrador te asigne una ruta.
            </p>
          </div>
        </Alert>

        {/* Info Card */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mt-4">
          <div className="flex items-start gap-4">
            <HiOutlineCollection className="w-12 h-12 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">¿Qué necesitas hacer?</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Contacta a tu supervisor o administrador</li>
                <li>• Solicita que te asignen una ruta</li>
                <li>• Una vez asignada, podrás crear préstamos para los clientes de tu ruta</li>
              </ul>
            </div>
          </div>
        </div>

        <Button
          onClick={() => window.location.href = '/'}
          color="gray"
          className="mt-4"
        >
          Ir al inicio
        </Button>
      </div>
    )
  }

  return (
    <div className="p-4 sm:p-4 space-y-4 pb-20">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          to="/loans"
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <HiArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400"/>
        </Link>
        <div className="flex items-center gap-2">
          <HiOutlineCash className="w-6 h-6 text-primary-600 dark:text-primary-400"/>
          <Text size="lg" weight="bold">
            Nuevo Préstamo
          </Text>
        </div>
      </div>

      <CreateLoanForm/>
    </div>
  )
}

export default CreateLoanPage
