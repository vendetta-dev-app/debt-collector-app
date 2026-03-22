import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Badge, Button, Spinner } from 'flowbite-react'
import {
  HiOutlineArrowLeft,
  HiOutlineCurrencyDollar,
  HiOutlineHome,
  HiOutlinePencil,
  HiOutlinePhone,
} from 'react-icons/hi'
import { Text } from '@/components'
import ClientDetailQuery from '@/modules/clients/queries/ClientDetailQuery'
import { formatRUT } from '@snippets/forms/clientValidations'
import { FaMapPin } from 'react-icons/fa'

const ClientDetailPage = () => {
  const { clientId } = useParams()
  const navigate = useNavigate()

  const { data, loading, error, refetch } = useQuery(
      ClientDetailQuery,
      {
        skip: !clientId,
        variables: { id: clientId as string },
        fetchPolicy: 'cache-and-network',
      },
  )

  const client = data?.client

  if (loading && !data) {
    return (
        <div className="flex justify-center items-center py-16">
          <Spinner size="xl"/>
        </div>
    )
  }

  if (error) {
    return (
        <div className="text-center py-16 px-4">
          <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">Error al cargar el cliente</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{error.message}</p>
          <Button onClick={() => refetch()} color="primary">
            Reintentar
          </Button>
        </div>
    )
  }

  if (!client) {
    return (
        <div className="text-center py-16 px-4">
          <p className="text-gray-500 dark:text-gray-400">Cliente no encontrado</p>
        </div>
    )
  }

  const googleMapsUrl = client.latitude && client.longitude
      ? `https://www.google.com/maps/search/?api=1&query=${client.latitude},${client.longitude}`
      : null

  const whatsappUrl = client.user?.phoneNumber1
      ? `https://wa.me/${client.user.phoneNumber1.replace(/\+/g, '').replace(/\s/g, '')}`
      : null

  return (
      <div className="p-3 sm:p-4 space-y-4 pb-20">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Button
              color="light"
              size="sm"
              onClick={() => navigate('/clients')}
              className="gap-1"
          >
            <HiOutlineArrowLeft className="w-4 h-4"/>
            Volver
          </Button>
          <Text size="lg" weight="bold" className="flex-1">
            Detalle del Cliente
          </Text>
          <Button
              color="light"
              size="sm"
              onClick={() => navigate(`/clients/${clientId}/edit`)}
              className="gap-1"
          >
            <HiOutlinePencil className="w-4 h-4"/>
            Editar
          </Button>
        </div>

        {/* Client Info Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          {/* Avatar & Name Section */}
          <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-900/20 flex items-center justify-center flex-shrink-0">
                <Text size="lg" weight="bold" color="primary">
                  {client.user?.fullName?.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)}
                </Text>
              </div>

              {/* Name & Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  <Text size="xl" weight="bold" className="truncate">
                    {client.user?.fullName}
                  </Text>
                  {client.alias && (
                      <Badge color="gray">{client.alias}</Badge>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-mono">{formatRUT(client.identityDocument)}</span>
                  <span>•</span>
                  <span>{client.route?.name || 'Sin ruta'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-4 sm:p-6 space-y-4">
            {/* Phones */}
            <div className="space-y-2">
              {client.user?.phoneNumber1 && (
                  <a
                      href={`tel:${client.user.phoneNumber1}`}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <HiOutlinePhone className="w-5 h-5 text-gray-400"/>
                    <span>{client.user.phoneNumber1}</span>
                  </a>
              )}
              {client.user?.phoneNumber2 && (
                  <a
                      href={`tel:${client.user.phoneNumber2}`}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <HiOutlinePhone className="w-5 h-5 text-gray-400"/>
                    <span>{client.user.phoneNumber2}</span>
                  </a>
              )}
            </div>

            {/* Address */}
            <div className="space-y-2">
              <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <HiOutlineHome className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5"/>
                <div>
                  <p className="font-medium">{client.addressLine1}</p>
                  {client.addressLine2 && <p className="text-sm text-gray-500">{client.addressLine2}</p>}
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {client.neighborhood}{client.city && `, ${client.city}`}
                  </p>
                </div>
              </div>
              {client.addressReference && (
                  <div className="flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400 italic ml-8">
                    <span>"{client.addressReference}"</span>
                  </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-2 pt-2">
              {whatsappUrl && (
                  <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    WhatsApp
                  </a>
              )}
              {googleMapsUrl && (
                  <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <FaMapPin className="w-4 h-4"/>
                    Ver mapa
                  </a>
              )}
            </div>
          </div>
        </div>

        {/* Client Loans Section - Placeholder */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <Text size="base" weight="semibold">Préstamos del Cliente</Text>
            <HiOutlineCurrencyDollar className="w-5 h-5 text-gray-400"/>
          </div>
          <Text size="sm" color="gray" className="mt-2">
            Ver préstamos en la sección de préstamos
          </Text>
        </div>
      </div>
  )
}

export default ClientDetailPage
