import type { FC } from 'react'
import type { IconType } from 'react-icons'
import clsx from 'clsx'
import { SidebarItem } from 'flowbite-react'
import { useLocation, useNavigate } from 'react-router-dom'

export interface ISidebarItem {
  name: string
  icon: IconType
  href: string
}

interface Props {
  item: ISidebarItem
}

const SidebarLink: FC<Props> = ({ item }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const isActive = location.pathname === item.href

  return (
    <SidebarItem
        icon={item.icon}
        className={clsx(
            'w-full text-base font-semibold rounded-lg transition-all duration-200',
            'hover:bg-gray-100 dark:hover:bg-gray-700',
            'flex items-center gap-3 px-4 py-3',
            isActive && 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300',
            !isActive && 'text-gray-700 dark:text-gray-300',
        )}
        onClick={() => navigate(item.href)}
    >
      {item.name}
    </SidebarItem>
  )
}

export default SidebarLink