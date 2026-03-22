import { Link } from 'react-router-dom'
import { FiUserPlus } from 'react-icons/fi'
import { HiArrowLeft } from 'react-icons/hi'
import { Text } from '@components'
import CreateClientForm from '@clients/components/CreateClientForm'

const CreateClientPage = () => {
  return (
      <div className="p-4 sm:p-4 space-y-4 pb-20">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Link
              to="/clients"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <HiArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400"/>
          </Link>
          <div className="flex items-center gap-2">
            <FiUserPlus className="w-6 h-6 text-primary-600 dark:text-primary-400"/>
            <Text size="lg" weight="bold">
              Nuevo Cliente
            </Text>
          </div>
        </div>

        <div className="mb-6">
          <Text size="base" color="gray">
            Completa los datos del cliente. Los campos marcados con <span className="text-red-500">*</span> son
            obligatorios.
          </Text>
        </div>

        <CreateClientForm/>
      </div>
  )
}

export default CreateClientPage
