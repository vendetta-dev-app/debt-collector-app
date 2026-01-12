import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import RouteByIdQuery from '@/modules/routes/queries/RouteByIdQuery'
import { Badge, Button, Spinner } from 'flowbite-react'
import {
  HiOutlineClock,
  HiOutlineCollection,
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
  HiOutlineUserCircle,
  HiOutlineUserGroup,
} from 'react-icons/hi'
import { PiEmpty } from 'react-icons/pi'
import NiceModal from '@ebay/nice-modal-react'
import { Text } from '@components'
import InfoCard from '@/components/cards/InfoCard'
import CurrencyCell from '@/components/tables/CurrencyCell'
import AddAdminToRouteModal from '@/modules/routes/components/AddAdminToRouteModal'
import TransactionsByRouteSection from '@/modules/routes/components/TransactionsByRouteSection'

const RoutePage = () => {
  const { routeId = null } = useParams()

  const { data, loading, error } = useQuery(RouteByIdQuery, {
    skip: !routeId,
    variables: { id: routeId as string },
  })

  if (loading)
    return (
      <div className="flex justify-center py-16">
        <Spinner size="xl" />
      </div>
    )

  if (error)
    return (
      <div className="text-center text-red-600 py-16">
        Error cargando la información
      </div>
    )

  const route = data?.route

  if (!route)
    return (
      <div className="text-center text-gray-500 py-16">
        No existe la ruta solicitada
      </div>
    )

  return (
    <div className="p-4 space-y-4">
      <Text as="h1" size="xl" weight="semibold">
        {route.name}
      </Text>

      <InfoCard title="Información general" titleIcon={HiOutlineCollection}>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="space-y-2">
            <Text className="inline-flex items-center gap-1" color="success" size="sm">
              <HiOutlineCurrencyDollar className="text-base" />
              Saldo inicial
            </Text>
            <Text size="sm" weight="semibold">
              <CurrencyCell value={route.startingBalance ?? 0} />
            </Text>
          </div>

          <div className="space-y-2">
            <Text className="inline-flex items-center gap-1" color="success" size="sm">
              <HiOutlineLocationMarker className="text-base" />
              Ciudad
            </Text>
            <Text size="sm" weight="semibold">
              {route.city?.name}
            </Text>
          </div>

          <div className="space-y-2">
            <Text className="inline-flex items-center gap-1" color="success" size="sm">
              <HiOutlineClock className="text-base" />
              Creada el
            </Text>
            <Text size="sm" weight="semibold">
              {new Date(route.createdAt).toLocaleDateString()}
            </Text>
          </div>

          <div className="space-y-2">
            <Text className="inline-flex items-center gap-1" color="success" size="sm">
              <HiOutlineClock className="text-base" />
              Actualizada el
            </Text>
            <Text size="sm" weight="semibold">
              {new Date(route.updatedAt).toLocaleDateString()}
            </Text>
          </div>
        </div>
      </InfoCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard title="Administradores" titleIcon={HiOutlineUserGroup}>
          {
            route.administrators?.edges.length
              ?
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {
                  route.administrators.edges.map((edge) => (
                    <div
                      key={edge?.node?.id}
                      className="flex justify-between items-center py-2"
                    >
                      <Text size="sm" weight="medium">
                        {edge?.node?.user.fullName}
                      </Text>
                      <Badge color={edge?.node?.user.isActive ? 'green' : 'red'}>
                        {edge?.node?.user.isActive ? 'Activo' : 'Inactivo'}
                      </Badge>
                    </div>
                  ))
                }
              </div>
              :
              <Text color="gray" className="flex flex-col items-center gap-4">
                <PiEmpty className="text-3xl" />
                No hay administradores registrados
              </Text>
          }
          <Button
            size='xs'
            color="light"
            className='mt-4'
            onClick={() => NiceModal.show(AddAdminToRouteModal, {
              routeId: route.id
            })}
          >
            Agregar administrador
          </Button>
        </InfoCard>
        <InfoCard title="Recolector" titleIcon={HiOutlineUserCircle}>
          {
            route.collector
              ?
              <div className="flex justify-between items-center py-2"
              >
                <Text size="sm" weight="medium">
                  {route.collector.user.fullName}
                </Text>
                <Badge color={route.collector.user.isActive ? 'green' : 'red'}>
                  {route.collector.user.isActive ? 'Activo' : 'Inactivo'}
                </Badge>
              </div>
              :
              <Text color="gray" className="flex flex-col items-center gap-4">
                <PiEmpty className="text-3xl" />
                No tiene recolector asignado
              </Text>
          }
        </InfoCard>
      </div>
      <TransactionsByRouteSection routeId={route.id} />
    </div>
  )
}

export default RoutePage