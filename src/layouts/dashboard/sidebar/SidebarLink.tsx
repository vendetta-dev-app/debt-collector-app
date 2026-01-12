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
              'lg:text-sm lg:[&_svg]:h-4 lg:[&_svg]:w-4 font-semibold hover:cursor-pointer',
              isActive && 'bg-primary-600/10',
              isActive && '[&_svg]:text-primary-800 dark:[&_svg]:text-primary-600 text-primary-800 dark:text-primary-600',
          )}
          onClick={() => navigate(item.href)}
      >
        {item.name}
      </SidebarItem>
  )
}

export default SidebarLink