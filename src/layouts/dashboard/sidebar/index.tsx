import type { ISidebarItem } from '@/layouts/dashboard/sidebar/SidebarLink'
import SidebarLink from '@/layouts/dashboard/sidebar/SidebarLink'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { Drawer, DrawerHeader, DrawerItems, Sidebar, SidebarItemGroup, SidebarItems } from 'flowbite-react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { TbCoins, TbHome, TbMoneybag, TbRouteSquare, TbUserCheck, TbUsers } from 'react-icons/tb'

const items: ISidebarItem[] = [
  {
    name: 'Inicio',
    icon: TbHome,
    href: '/',
  },
  {
    name: 'Clientes',
    icon: TbUsers,
    href: '/clients',
  },
  {
    name: 'Transacciones',
    icon: TbCoins,
    href: '/transactions',
  },
  {
    name: 'Rutas',
    icon: TbRouteSquare,
    href: '/routes',
  },
]

const DashboardSidebar = NiceModal.create(() => {
  const modal = useModal()
  return (
    <Drawer open={modal.visible} onClose={() => modal.hide()}>
      <DrawerHeader title="Menú" titleIcon={HiMenuAlt1} />
      <DrawerItems>
        <Sidebar className="[&>div]:bg-transparent [&>div]:p-0">
          <SidebarItems>
            <SidebarItemGroup>
              {
                items.map((item) => (
                  <SidebarLink key={item.href} item={item} />
                ))
              }
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </DrawerItems>
    </Drawer>
  )
})

export default DashboardSidebar