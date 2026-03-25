import { useNavigate } from 'react-router-dom'
import { HiPlus, HiOutlineExclamationCircle } from 'react-icons/hi'
import { Button, Alert } from 'flowbite-react'
import PageTable from '@/components/tables/PageTable'
import LoansCollectorTable from '@/modules/loans/components/LoansCollectorTable'
import useMe from '@modules/auth/hooks/useMe'

const LoansPage = () => {
  const navigate = useNavigate()
  const me = useMe()
  const hasRoute = !!me?.collectorProfile?.route

  return (
    <PageTable>
      <PageTable.Header title="Mis Préstamos">
        {hasRoute ? (
          <Button
            onClick={() => navigate('/loans/new')}
            size="sm"
            className="flex items-center gap-2"
          >
            <HiPlus className="w-4 h-4" />
            Nuevo Préstamo
          </Button>
        ) : null}
      </PageTable.Header>
      <PageTable.Table>
        {!hasRoute && (
          <Alert color="warning" icon={HiOutlineExclamationCircle} className="mb-4">
            <span className="font-medium">No tienes ruta asignada</span>
            {' '}Para crear préstamos, necesitas que un administrador te asigne una ruta. Contacta a tu supervisor.
          </Alert>
        )}
        <LoansCollectorTable/>
      </PageTable.Table>
    </PageTable>
  )
}

export default LoansPage
