import type { ISidebarItem } from '@/layouts/dashboard/sidebar/SidebarLink'
import SidebarLink from '@/layouts/dashboard/sidebar/SidebarLink'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { Drawer, DrawerHeader, DrawerItems, Sidebar, SidebarItemGroup, SidebarItems } from 'flowbite-react'
import { HiMenuAlt1 } from 'react-icons/hi'
import { TbCoins, TbHome, TbMoneybag, TbRoute } from 'react-icons/tb'

const items: ISidebarItem[] = [
  {
    name: 'Inicio',
    icon: TbHome,
    href: '/',
  },
  {
    name: 'Mis Rutas',
    icon: TbRoute,
    href: '/routes',
  },
  {
    name: 'Mis Préstamos',
    icon: TbMoneybag,
    href: '/loans',
  },
  {
    name: 'Transacciones',
    icon: TbCoins,
    href: '/transactions',
  },
]

const DashboardSidebar = NiceModal.create(() => {
  const modal = useModal()
  return (
    <Drawer
      open={modal.visible}
      onClose={() => modal.hide()}
      position="left"
    >
      <DrawerHeader title="Menú" titleIcon={HiMenuAlt1} />
      <DrawerItems className="overflow-y-auto">
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