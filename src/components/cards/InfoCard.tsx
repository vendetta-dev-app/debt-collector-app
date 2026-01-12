import type { ReactNode } from 'react'
import type { IconType } from 'react-icons'
import { Text } from '@components'

interface Props {
  title: string
  titleIcon?: IconType
  children: ReactNode
}

const InfoCard = ({ title, titleIcon: Icon, children }: Props) => {
  return (
      <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="mb-4 flex items-center gap-2">
          {Icon && <Icon/>}
          <Text as="h6" weight="semibold">
            {title}
          </Text>
        </div>
        {children}
      </div>
  )
}

export default InfoCard