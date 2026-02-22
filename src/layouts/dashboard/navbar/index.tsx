import { createTheme, Navbar, NavbarBrand, ThemeProvider } from 'flowbite-react'
import { Text } from '@components'
import UserDropdown from '@/layouts/dashboard/navbar/UserDropdown'
import useNavbarTitle from '@/layouts/dashboard/navbar/useNavbarTitle'
import ToggleDarkModeButton from '@/layouts/dashboard/navbar/ToggleDarkModeButton'
import SidebarButton from './SidebarButton'

const navbarTheme = createTheme({
  navbar: {
    root: {
      base: 'bg-white px-3 py-3 bg-white border-b border-gray-200 sm:px-4 dark:border-gray-700 dark:bg-gray-800 sticky top-0 z-30',
    },
  },
})

const DashboardNavbar = () => {
  const { title } = useNavbarTitle()

  return (
      <ThemeProvider theme={navbarTheme}>
        <Navbar fluid>
          <NavbarBrand className="gap-3">
            <SidebarButton/>
            <Text as="h3" color="primary" weight="bold" className="hidden sm:block">
              {title}
            </Text>
            <Text as="h3" color="primary" weight="bold" className="sm:hidden text-base">
              {title === 'Inicio' ? 'Inicio' : title === 'Mis Rutas' ? 'Rutas' : title === 'Mis Préstamos' ? 'Préstamos' : title}
            </Text>
          </NavbarBrand>
          <div className="flex items-center gap-1 md:gap-2 md:order-2 ml-auto">
            <ToggleDarkModeButton/>
            <UserDropdown/>
          </div>
        </Navbar>
      </ThemeProvider>
  )
}

export default DashboardNavbar
