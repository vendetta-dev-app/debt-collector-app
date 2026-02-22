import NiceModal from '@ebay/nice-modal-react'
import { HiMenuAlt2 } from 'react-icons/hi'
import DashboardSidebar from '../sidebar'

const SidebarButton = () => {
  return (
    <button
      onClick={() => NiceModal.show(DashboardSidebar)}
      className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Abrir menú"
    >
      <HiMenuAlt2 className="w-6 h-6" />
    </button>
  )
}

export default SidebarButton
