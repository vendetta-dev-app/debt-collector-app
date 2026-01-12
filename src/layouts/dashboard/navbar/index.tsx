import { createTheme, Navbar, NavbarBrand, ThemeProvider } from 'flowbite-react'
import { Text } from '@components'
import UserDropdown from '@/layouts/dashboard/navbar/UserDropdown'
import useNavbarTitle from '@/layouts/dashboard/navbar/useNavbarTitle'
import ToggleDarkModeButton from '@/layouts/dashboard/navbar/ToggleDarkModeButton'
import SidebarButton from './SidebarButton'

const navbarTheme = createTheme({
  navbar: {
    root: {
      base: 'bg-white px-2 py-2.5 bg-white border-b border-gray-100 sm:px-4 dark:border-gray-700 dark:bg-gray-800',
    },
  },
})

const DashboardNavbar = () => {
  const { title } = useNavbarTitle()

  return (
      <ThemeProvider theme={navbarTheme}>
        <Navbar fluid>
          <NavbarBrand>
            <SidebarButton/>
            <Text as="h3" color="primary" weight="bold">
              {title}
            </Text>
          </NavbarBrand>
          <div className="flex items-center gap-2 md:order-2">
            <ToggleDarkModeButton/>
            <UserDropdown/>
            {/*<NavbarToggle/>*/}
          </div>
        </Navbar>
      </ThemeProvider>
  )
}

export default DashboardNavbar
