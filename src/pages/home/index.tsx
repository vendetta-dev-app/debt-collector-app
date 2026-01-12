import { useMemo } from 'react'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { TbCoins, TbPlus, TbRouteSquare, TbUsers } from 'react-icons/tb'
import { Text } from '@components'
import useMe from '@auth/hooks/useMe'

const HomePage = () => {
  const me = useMe()
  const navigate = useNavigate()

  const buttons = useMemo(() => ([
    {
      label: 'Agregar cliente',
      icon: TbUsers,
      onClick: () => navigate('/clients'),
    },
    {
      label: 'Agregar transaccion',
      icon: TbCoins,
      onClick: () => navigate('/transactions'),
    },
    {
      label: 'Crear préstamo',
      icon: TbRouteSquare,
      onClick: () => navigate('/routes'),
    },
  ]), [])

  const arr = useMemo(() => ([
    {
      label: 'Clientes',
      icon: TbUsers,
      onClick: () => navigate('/clients'),
      // colorClassName: 'bg-primary-400/10 text-primary-800',
    },
    {
      label: 'Transacciones',
      icon: TbCoins,
      onClick: () => navigate('/transactions'),
      // colorClassName: 'bg-purple-500/10 text-purple-800',
    },
    {
      label: 'Rutas',
      icon: TbRouteSquare,
      onClick: () => navigate('/routes'),
      // colorClassName: 'bg-orange-500/10 text-orange-800',
    },
  ]), [])

  return (
      <div className="p-4">
        <div className="p-4 bg-gradient-to-br from-orange-100 to-primary-100 rounded-md">
          <img src="/coin.svg" alt="" className="w-8 mb-4"/>
          <Text color="primay" size="lg" weight="bold">
            Bienvenido, {me?.fullName}
          </Text>
          <Text color="gray" size="sm" weight="semibold">
            Administra los prestamos a tu clientes
          </Text>
        </div>
        <Text className="mt-8" weight="semibold">
          Acciones principales
        </Text>
        <div className="mt-4 grid gap-2">
          {
            buttons.map(({ icon: Icon, label, onClick }) => (
                <Button key={label} outline className="flex items-center justify-start gap-2">
                  <TbPlus className="w-5 h-5"/>
                  {label}
                </Button>
            ))
          }
        </div>
        <Text className="mt-8" weight="semibold">
          Navegar a:
        </Text>
        <div className="mt-4 grid gap-2">
          {
            arr.map(({ icon: Icon, label, onClick }) => (
                <Button key={label} outline className="flex items-center justify-start gap-2">
                  <Icon className="w-5 h-5"/>
                  <span className="flex-grow text-start">
                    {label}
                  </span>
                  <span className="block shrink-0">
                    <IoIosArrowForward/>
                  </span>
                </Button>
            ))
          }
        </div>
      </div>
  )
}

export default HomePage