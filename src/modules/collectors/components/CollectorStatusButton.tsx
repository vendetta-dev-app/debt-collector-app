import type { FC } from 'react'
import { Badge } from 'flowbite-react'

interface Props {
  status: boolean
}

const CollectorStatusButton: FC<Props> = ({ status }) => {
  return (
      <Badge className="inline" color={status ? 'green' : 'red'} size="lg">
        {status ? 'Activo' : 'Inactivo'}
      </Badge>
  )
}

export default CollectorStatusButton