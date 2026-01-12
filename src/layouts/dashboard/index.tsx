import DashboardNavbar from '@/layouts/dashboard/navbar'
import type { FC, PropsWithChildren } from 'react'

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800">
      {/* <DashboardSidebar/> */}
      <DashboardNavbar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout