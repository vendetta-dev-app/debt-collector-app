import { useMemo, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Badge, Button, Card, Spinner, TextInput } from 'flowbite-react'
import {
  HiChevronRight,
  HiOutlineLockClosed,
  HiOutlinePhone,
  HiOutlineSearch,
  HiOutlineUserGroup,
  HiUserAdd,
  HiOutlineMapPin,
} from 'react-icons/hi'
import { Text } from '@components'
import useMe from '@auth/hooks/useMe'
import { formatRUT } from '@snippets/forms/clientValidations'
import ClientsByCollectorQuery from '@clients/queries/ClientsByCollectorQuery'

// NoRouteState Component
const NoRouteState = () => (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 mb-6">
        <HiOutlineLockClosed className="w-10 h-10 text-amber-600 dark:text-amber-400"/>
      </div>
      <Text size="xl" weight="bold" className="text-gray-900 dark:text-white mb-2 text-center">
        Cuenta sin ruta asignada
      </Text>
      <Text size="sm" color="gray" className="max-w-xs mx-auto mb-6 text-center">
        Para gestionar clientes, contacta a tu administrador para que te asigne una ruta.
      </Text>
      <div className="inline-flex flex-col sm:flex-row gap-3 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center justify-center gap-2">
          <HiOutlineUserGroup className="w-4 h-4"/>
          <span>Gestionar clientes</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <HiUserAdd className="w-4 h-4"/>
          <span>Crear nuevos clientes</span>
        </div>
      </div>
    </div>
)

const ClientCard = ({ client }: { client: any }) => {
  // Get initials for avatar
  const initials = client.user?.fullName
    ?.split(' ')
    .map((n: string) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
      <Link
          to={`/clients/${client.id}`}
          className="block bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow transition-all border border-gray-200 dark:border-gray-700 active:scale-[0.99]"
      >
        <div className="p-3">
          <div className="flex items-center gap-3">
            {/* Avatar with initials */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-900/20 flex items-center justify-center flex-shrink-0">
              <Text size="sm" weight="bold" color="primary">
                {initials}
              </Text>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              {/* Name row */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 min-w-0">
                  <Text size="base" weight="semibold" className="truncate">
                    {client.user?.fullName}
                  </Text>
                  {client.alias && (
                      <Badge color="gray" size="xs">{client.alias}</Badge>
                  )}
                </div>
                <HiChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0"/>
              </div>

              {/* Details row */}
              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                <a
                    href={`tel:${client.user?.phoneNumber1}`}
                    className="flex items-center gap-1 hover:text-primary-600 dark:hover:text-primary-400"
                    onClick={(e) => e.stopPropagation()}
                >
                  <HiOutlinePhone className="w-3 h-3"/>
                  {client.user?.phoneNumber1}
                </a>
                <span>•</span>
                <span className="flex items-center gap-1 truncate">
                  <FaHome className="w-3 h-3 flex-shrink-0"/>
                  {client.neighborhood}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
  )
}

const ClientsPage = () => {
  const me = useMe()
  const route = me?.collectorProfile?.route || null
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const { data, loading, error, refetch } = useQuery(
      ClientsByCollectorQuery,
      {
        variables: {
          first: 50,
        },
        fetchPolicy: 'cache-and-network',
      },
  )

  const clients = useMemo(() => {
    const edges = data?.clientsByCollector?.edges || []
    return edges.map((edge: any) => edge?.node).filter(Boolean)
  }, [data])

  // Also filter locally if search is provided (backup filtering)
  const filteredClients = useMemo(() => {
    if (!search) return clients
    const searchLower = search.toLowerCase()
    return clients.filter((client: any) => {
      return (
          client.user?.fullName?.toLowerCase().includes(searchLower) ||
          client.alias?.toLowerCase().includes(searchLower) ||
          client.identityDocument?.includes(search) ||
          client.neighborhood?.toLowerCase().includes(searchLower)
      )
    })
  }, [clients, search])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  // Show no route state if no route assigned
  if (!route) {
    return (
        <div className="p-3 sm:p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <Text size="lg" weight="bold">
              Mis Clientes
            </Text>
          </div>
          <NoRouteState/>
        </div>
    )
  }

  return (
      <div className="p-3 sm:p-4 space-y-4 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Text size="lg" weight="bold">
            Mis Clientes
          </Text>
          <Button
              size="sm"
              className="gap-2"
              onClick={() => navigate('/clients/new')}
          >
            <HiUserAdd className="w-4 h-4"/>
            Nuevo
          </Button>
        </div>

        {/* Search bar */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HiOutlineSearch className="w-5 h-5 text-gray-400"/>
          </div>
          <TextInput
              type="text"
              placeholder="Buscar por nombre, alias, RUT..."
              value={search}
              onChange={handleSearchChange}
              className="pl-10"
          />
        </div>

        {/* Loading state */}
        {loading && !data && (
            <div className="flex justify-center py-12">
              <Spinner size="xl"/>
            </div>
        )}

        {/* Error state */}
        {error && (
            <Card className="p-6 text-center">
              <Text color="red" className="mb-4">Error al cargar clientes</Text>
              <Button
                  onClick={() => refetch()}
                  color="primary"
              >
                Reintentar
              </Button>
            </Card>
        )}

        {/* Empty state */}
        {!loading && !error && filteredClients.length === 0 && (
            <Card className="p-8 text-center">
              <div className="text-gray-400 dark:text-gray-600 mb-4">
                <HiOutlineSearch className="w-12 h-12 mx-auto mb-2"/>
                {search ? (
                    <>
                      <p className="font-medium">No se encontraron resultados</p>
                      <p className="text-sm mt-1">Intenta con otra búsqueda</p>
                    </>
                ) : (
                    <>
                      <p className="font-medium">No tienes clientes registrados</p>
                      <p className="text-sm mt-1">Crea tu primer cliente para empezar</p>
                    </>
                )}
              </div>
              {!search && (
                  <Button
                      className="gap-2"
                      onClick={() => navigate('/clients/new')}
                  >
                    <HiUserAdd className="w-4 h-4"/>
                    Crear Cliente
                  </Button>
              )}
            </Card>
        )}

        {/* Clients list */}
        <div className="space-y-3">
          {filteredClients.map((client: any) => (
              <ClientCard key={client.id} client={client}/>
          ))}
        </div>

        {/* Results count */}
        {!loading && !error && filteredClients.length > 0 && (
            <Text size="sm" color="gray" className="text-center">
              {filteredClients.length} {filteredClients.length === 1 ? 'cliente' : 'clientes'}
            </Text>
        )}
      </div>
  )
}

export default ClientsPage
