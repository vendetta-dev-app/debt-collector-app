import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Button, Spinner } from 'flowbite-react'
import { HiArrowLeft, HiOutlineMenuAlt2 } from 'react-icons/hi'
import { Text } from '@components'
import ClientsByCollectorQuery from '@clients/queries/ClientsByCollectorQuery'
import { ReorderRouteClientsMutation } from '@clients/mutations'
import useToast from '@/hooks/useToast'

type Client = {
  id: string
  visitOrder?: number | null
  alias?: string | null
  neighborhood: string
  user: { fullName: string }
}

const SortableClientRow = ({ client, index }: { client: Client; index: number }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: client?.id as string,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 shadow-sm"
    >
      <span className="text-xs font-bold text-gray-400 w-5 text-center flex-shrink-0">
        {index + 1}
      </span>
      <div className="flex-1 min-w-0">
        <Text size="sm" weight="semibold" className="truncate">
          {client.user.fullName}
        </Text>
        <Text size="xs" color="gray" className="truncate">
          {client.alias ? `${client.alias} · ` : ''}{client.neighborhood}
        </Text>
      </div>
      <div
        {...attributes}
        {...listeners}
        className="p-2 cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 touch-none"
      >
        <HiOutlineMenuAlt2 className="w-5 h-5" />
      </div>
    </div>
  )
}

const OrganizeRoutePage = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [clients, setClients] = useState<Client[]>([])

  const { data, loading } = useQuery(ClientsByCollectorQuery, {
    variables: { first: 100 },
    fetchPolicy: 'cache-and-network',
  })

  const [reorderClients, { loading: saving }] = useMutation(ReorderRouteClientsMutation)

  useEffect(() => {
    const edges = data?.clientsByCollector?.edges || []
    const loaded = edges.map((e: any) => e?.node).filter(Boolean) as Client[]
    // Clients with visitOrder first, then unordered alphabetically at the end
    const withOrder = loaded.filter((c) => c.visitOrder != null).sort((a, b) => (a.visitOrder ?? 0) - (b.visitOrder ?? 0))
    const withoutOrder = loaded.filter((c) => c.visitOrder == null)
    setClients([...withOrder, ...withoutOrder])
  }, [data])

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }))

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) return
    setClients((prev) => {
      const oldIndex = prev.findIndex((c) => c.id === active.id)
      const newIndex = prev.findIndex((c) => c.id === over.id)
      return arrayMove(prev, oldIndex, newIndex)
    })
  }

  const handleSave = async () => {
    const clientOrders = clients.map((client, index) => ({
      clientId: client.id,
      order: index + 1,
    }))
    try {
      await reorderClients({ variables: { input: { clientOrders } } })
      toast('Orden guardado', 'success')
      navigate('/clients')
    } catch {
      toast('Error al guardar el orden', 'error')
    }
  }

  return (
    <div className="p-3 sm:p-4 space-y-4 pb-24">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/clients')} className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
          <HiArrowLeft className="w-5 h-5" />
        </button>
        <Text size="lg" weight="bold">Organizar Ruta</Text>
      </div>

      <Text size="sm" color="gray">
        Arrastra los clientes para definir el orden en que los visitas cada día.
      </Text>

      {loading && !data && (
        <div className="flex justify-center py-12">
          <Spinner size="xl" />
        </div>
      )}

      {!loading && clients.length === 0 && (
        <Text color="gray" className="text-center py-12">No tienes clientes en tu ruta.</Text>
      )}

      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={clients.map((c) => c.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-2">
            {clients.map((client, index) => (
              <SortableClientRow key={client.id} client={client} index={index} />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {clients.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <Button className="w-full" onClick={handleSave} disabled={saving || loading}>
            {saving ? <Spinner size="sm" className="mr-2" /> : null}
            Guardar orden
          </Button>
        </div>
      )}
    </div>
  )
}

export default OrganizeRoutePage
