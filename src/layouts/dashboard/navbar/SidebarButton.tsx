import NiceModal from '@ebay/nice-modal-react'
import { Button } from 'flowbite-react'
import { HiMenuAlt1 } from 'react-icons/hi'
import DashboardSidebar from '../sidebar'

const SidebarButton = () => {

  return (
      <Button onClick={()=>NiceModal.show(DashboardSidebar)}>
        <HiMenuAlt1/>
      </Button>
  )
}

export default SidebarButton
