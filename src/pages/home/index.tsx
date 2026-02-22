import { useMemo } from 'react'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { TbCoins, TbRoute, TbMoneybag, TbHome } from 'react-icons/tb'
import { Text } from '@components'
import useMe from '@auth/hooks/useMe'

const HomePage = () => {
  const me = useMe()
  const navigate = useNavigate()

  const quickActions = useMemo(() => ([
    {
      label: 'Mis Rutas',
      icon: TbRoute,
      onClick: () => navigate('/routes'),
      description: 'Consulta las rutas asignadas y sus préstamos',
      color: 'blue',
    },
    {
      label: 'Mis Préstamos',
      icon: TbMoneybag,
      onClick: () => navigate('/loans'),
      description: 'Lista completa de préstamos con filtros',
      color: 'green',
    },
    {
      label: 'Transacciones',
      icon: TbCoins,
      onClick: () => navigate('/transactions'),
      description: 'Historial de transacciones',
      color: 'purple',
    },
  ]), [])

  return (
      <div className="p-3 sm:p-4 space-y-4 sm:space-y-6">
        {/* Welcome Card */}
        <div className="p-4 sm:p-6 bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/20 dark:to-blue-900/20 rounded-lg shadow-sm">
          <img src="/coin.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4"/>
          <Text color="primary" size="lg" weight="bold" className="sm:text-xl">
            Bienvenido, {me?.fullName?.split(' ')[0]}
          </Text>
          <Text color="gray" size="sm" weight="semibold">
            Gestiona tus cobros y préstamos de manera eficiente
          </Text>
        </div>

        {/* Quick Stats */}
        <div>
          <Text className="mb-3 sm:mb-4" weight="semibold" size="lg">
            Acciones Rápidas
          </Text>
          <div className="grid gap-2 sm:gap-3">
            {
              quickActions.map(({ icon: Icon, label, onClick, description, color }) => (
                <button
                  key={label}
                  onClick={onClick}
                  className="w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 text-left hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className={`p-2 sm:p-3 rounded-lg bg-${color}-50 dark:bg-${color}-900/20`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${color}-600 dark:text-${color}-400`}/>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Text size="base" weight="semibold">
                      {label}
                    </Text>
                    <Text size="sm" color="gray" className="hidden sm:block line-clamp-1">
                      {description}
                    </Text>
                  </div>
                  <IoIosArrowForward className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0"/>
                </button>
              ))
            }
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 sm:p-4">
          <div className="flex gap-3">
            <TbHome className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"/>
            <div>
              <Text size="sm" weight="semibold" color="blue">
                App de Cobradores
              </Text>
              <Text size="sm" color="gray" className="mt-1">
                Usa el menú (☰) para navegar. Puedes ver tus rutas, préstamos y registrar pagos.
              </Text>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomePage