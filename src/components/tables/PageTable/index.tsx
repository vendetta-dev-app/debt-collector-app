import type { FC, PropsWithChildren } from 'react'
import { Text } from '@components'
import TableRefetchBtn from '@/components/tables/TableRefetchBtn'

interface Props {
  title: string
}

const PageTableHeader: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
      <div className="relative flex-grow-0 p-2 sm:p-4">
        <div
            className="w-full flex flex-col md:flex-row md:items-center md:justify-between md:space-y-0 gap-2 md:gap-4">
          <div>
            <Text as="h5" weight="semibold">
              {title}
            </Text>
          </div>
          <div className="flex gap-2">
            <TableRefetchBtn/>
            {children}
          </div>
        </div>
      </div>
  )
}

const PageTableTable: FC<PropsWithChildren> = ({ children }) => {
  return (
      <div className="relative flex-grow p-2 sm:p-4 !pt-0">
        {/*<div className="absolute w-full h-full">*/}
        {children}
        {/*</div>*/}
      </div>
  )
}

const PageTableComponent: FC<PropsWithChildren> = ({ children }) => {
  return (
      <div className="flex flex-col h-full w-full overflow-hidden">
        {children}
      </div>
  )
}

PageTableHeader.displayName = 'PageTable.Header'
PageTableTable.displayName = 'PageTable.Table'

const PageTable = Object.assign(PageTableComponent, {
  Header: PageTableHeader,
  Table: PageTableTable,
})

export default PageTable
