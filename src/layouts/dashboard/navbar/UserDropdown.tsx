import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-react'
import useMe from '@auth/hooks/useMe'
import { useAuth } from '@auth/hooks'

const UserDropdown = () => {
  const me = useMe()
  const { logout } = useAuth()

  return (
      <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
                rounded
                alt="User settings"
                img="https://img.icons8.com/color/96/user-male-circle--v5.png"
            />
          }
      >
        <DropdownHeader>
          <span className="block text-sm">{me?.fullName}</span>
          <span className="block truncate text-sm font-medium">{me?.email}</span>
        </DropdownHeader>
        <DropdownDivider/>
        <DropdownItem onClick={() => logout()}>
          Cerrar Sesión
        </DropdownItem>
      </Dropdown>
  )
}

export default UserDropdown