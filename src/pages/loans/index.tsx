import { useNavigate } from 'react-router-dom'
import { HiPlus } from 'react-icons/hi'
import { Button } from 'flowbite-react'
import PageTable from '@/components/tables/PageTable'
import LoansCollectorTable from '@/modules/loans/components/LoansCollectorTable'

const LoansPage = () => {
  const navigate = useNavigate()

  return (
    <PageTable>
      <PageTable.Header title="Mis Préstamos">
        <Button
          onClick={() => navigate('/loans/new')}
          size="sm"
          className="flex items-center gap-2"
        >
          <HiPlus className="w-4 h-4" />
          Nuevo Préstamo
        </Button>
      </PageTable.Header>
      <PageTable.Table>
        <LoansCollectorTable/>
      </PageTable.Table>
    </PageTable>
  )
}

export default LoansPage
