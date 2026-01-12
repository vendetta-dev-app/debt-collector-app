import type { FC } from 'react'
import { Button, Tooltip } from 'flowbite-react'
import { HiRefresh } from 'react-icons/hi'
import { useApolloClient } from '@apollo/client'

const TableRefetchBtn: FC = () => {
  const client = useApolloClient()

  const handleClick = async () => {
    try {
      await client.refetchQueries({
        include: ['MyProducts', 'PartsRequest'], // Reemplázalos con los nombres de tus queries
      })
    } catch (error) {
      // TODO log this error to sentry
      console.error('Failed to reset store', error)
    }
  }

  return (
      <Tooltip
          content="Actualizar"
          placement="left">
        <Button
            color="light"
            onClick={handleClick}>
          <HiRefresh className="w-5 h-5"/>
        </Button>
      </Tooltip>
  )
}

export default TableRefetchBtn