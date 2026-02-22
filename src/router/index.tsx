import HomePage from '@/pages/home'
import AuthLayout from '@/layouts/auth'
import DashboardLayout from '@/layouts/dashboard/index'
import LoginPage from '@/pages/auth/login'
import RoutesPage from '@/pages/routes'
import RoutePage from '@/pages/routes/route'
import TransactionsPage from '@/pages/transactions'
import LoansPage from '@/pages/loans'
import LoanDetailPage from '@/pages/loans/route'
import ProtectedRoutes from '@/router/ProtectedRoutes'
import AuthProvider from '@auth/contexts/AuthProvider'
import MeProvider from '@auth/contexts/MeProvider'
import NiceModal from '@ebay/nice-modal-react'
import { createBrowserRouter, Outlet } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
        <AuthProvider>
          <MeProvider>
            <NiceModal.Provider>
              <DashboardLayout>
                <ProtectedRoutes/>
              </DashboardLayout>
            </NiceModal.Provider>
          </MeProvider>
        </AuthProvider>
    ),
    children: [
      {
        path: '',
        element: <HomePage/>,
      },
      {
        path: 'transactions',
        element: <TransactionsPage/>,
      },
      {
        path: '/routes',
        element: <Outlet/>,
        children: [
          {
            path: '/routes',
            element: <RoutesPage/>,
          },
          {
            path: '/routes/:routeId',
            element: <RoutePage/>,
          },
        ],
      },
      {
        path: '/loans',
        element: <Outlet/>,
        children: [
          {
            path: '/loans',
            element: <LoansPage/>,
          },
          {
            path: '/loans/:loanId',
            element: <LoanDetailPage/>,
          },
        ],
      },
    ],
  },
  {
    path: 'auth',
    element: (
        <AuthProvider>
          <AuthLayout>
            <Outlet/>
          </AuthLayout>
        </AuthProvider>
    ),
    children: [
      {
        path: 'login',
        element: <LoginPage/>,
      },
    ],
  },
])

export default router
