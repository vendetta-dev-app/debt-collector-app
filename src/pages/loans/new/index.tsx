import { Link } from 'react-router-dom'
import { HiOutlineCash, HiArrowLeft } from 'react-icons/hi'
import { Text } from '@components'
import CreateLoanForm from '@/modules/loans/components/CreateLoanForm'

const CreateLoanPage = () => {
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
