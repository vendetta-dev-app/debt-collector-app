import { BsDatabaseFillX } from 'react-icons/bs'
import { Text } from '@components'

const NoTableData = () => {
  return (
      <div className="w-full flex flex-col items-center p-8">
        <span className="mt-4 text-9xl p-6 rounded-full bg-primary-100 dark:bg-primary-800">
          <BsDatabaseFillX className="text-primary-700 dark:text-primary-200"/>
        </span>
        <Text as="h3" className="mt-8" size="xl" weight="bold">
          Ups!, parace que aun no tienes datos
        </Text>
        <Text className="mt-2" size="sm">
          Empieza a agregar datos y podras ver tu información
        </Text>
      </div>
  )
}

export default NoTableData