import type {MyTableProps} from '@/components/tables/MyTable/types'
import {useCallback, useRef} from 'react'
import clsx from 'clsx'
import {useVirtualizer} from '@tanstack/react-virtual'
import {flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table'
import {Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow} from 'flowbite-react'
import {InfiniteScroll, Skeleton} from '@components'
import {MY_TABLE_ROW_HEIGHT} from '@/components/tables/MyTable/constants'
import SortingStatusIcon from '@/components/tables/MyTable/components/SortingStatusIcon'
import NoTableData from "@/components/tables/NoTableData";

const MyTable = <T extends object>({
                                       actions = [],
                                       columns,
                                       data = [],
                                       enableRowSelection = false,
                                       fixedRowHeight = false,
                                       infiniteScroll = false,
                                       isPageTable = false,
                                       loading = false,
                                       maxSkeletonRows = 20,
                                       rowSelection,
                                       showSkeletonRows = true,
                                       sorting,
                                       getRowId,
                                       onInfiniteScroll,
                                       onRowSelectionChange,
                                       onSortingChange,
                                   }: MyTableProps<T>) => {
    const tableContainerRef = useRef<HTMLDivElement | null>(null)
    const table = useReactTable<T>({
        data,
        columns,
        state: {
            ...(rowSelection ? {rowSelection} : {}),
            ...(sorting ? {sorting} : {}),
        },
        manualSorting: true,
        enableRowSelection,
        getCoreRowModel: getCoreRowModel(),
        ...(getRowId ? {getRowId} : {}),
        ...(onRowSelectionChange ? {onRowSelectionChange} : {}),
        ...(onSortingChange ? {onSortingChange} : {}),
    })

    const hasInfiniteScroll = infiniteScroll && onInfiniteScroll

    const {rows} = table.getRowModel()

    const rowVirtualizer = useVirtualizer({
        count: data.length,
        getScrollElement: () => tableContainerRef.current,
        estimateSize: useCallback(() => MY_TABLE_ROW_HEIGHT, [rows]),
        enabled: true,
        overscan: 10,
    })
    const {getVirtualItems, getTotalSize} = rowVirtualizer
    const virtualRows = getVirtualItems() ?? []
    const totalSize = getTotalSize()

    const paddingTop = useCallback(() => (
        virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0
    ), [virtualRows])()
    const paddingBottom = useCallback(() => (
        virtualRows.length > 0
            ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
            : 0
    ), [virtualRows])()

    const handleOnIntersect = async () => {
        if (onInfiniteScroll)
            onInfiniteScroll()
    }

    return (
        <div ref={tableContainerRef} className="flex-1 max-h-full overflow-auto">
            <Table hoverable className="relative min-w-full divide-y divide-gray-200 dark:divide-gray-600 table-fixed">
                {
                    table.getHeaderGroups().map(headerGroup => (
                        <TableHead
                            key={headerGroup.id}
                            className="sticky top-0 bg-gray-100 dark:bg-gray-700"
                        >
                            <TableRow>
                                {headerGroup.headers.map((header, index) => (
                                    <TableHeadCell
                                        key={header.id}
                                        colSpan={header.colSpan}
                                        className={clsx(
                                            'p-2',
                                            (isPageTable && index === 0) && 'pl-4',
                                            (isPageTable && index === headerGroup.headers.length - 1) && 'pr-4',
                                        )}
                                        style={{width: header.getSize()}}>
                                        {header.isPlaceholder
                                            ? null
                                            : (
                                                <div
                                                    {...{
                                                        className: clsx([
                                                            'h-5 flex items-center',
                                                            header.column.getCanSort() && 'cursor-pointer select-none',
                                                        ]),
                                                        onClick: header.column.getToggleSortingHandler(),
                                                    }}>
                                  <span>
                                    {
                                        flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )
                                    }
                                  </span>
                                                    {{
                                                        asc: <SortingStatusIcon status="asc"/>,
                                                        desc: <SortingStatusIcon status="desc"/>,
                                                    }[header.column.getIsSorted() as string] ?? null}
                                                    {
                                                        (header.column.getCanSort() && !header.column.getIsSorted()) &&
                                                        <SortingStatusIcon/>
                                                    }
                                                </div>
                                            )
                                        }
                                    </TableHeadCell>
                                ))}
                                {actions?.length > 0 && <TableHeadCell style={{width: 10}}/>}
                            </TableRow>
                        </TableHead>
                    ))
                }
                <TableBody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                    {
                        paddingTop > 0 && (
                            <TableRow>
                                <TableCell style={{height: `${paddingTop}px`}}/>
                            </TableRow>
                        )
                    }

                    {
                        data && (
                            virtualRows.map(virtualRow => {
                                const row = rows[virtualRow.index]

                                return (
                                    <TableRow key={row.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 group/row">
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell
                                                key={cell.id}
                                                className={clsx([
                                                    'px-2 whitespace-nowrap text-sm text-gray-900 max-w-full',
                                                    'dark:text-white',
                                                ])}
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                )
                            })
                        )
                    }
                    {(showSkeletonRows && loading) && (
                        Array.from({length: maxSkeletonRows ?? 20}).map((_, index) => (
                                <TableRow
                                    key={index}
                                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                    {...(fixedRowHeight && {style: {height: `${MY_TABLE_ROW_HEIGHT}px`}})}>
                                    {columns.map((_, colIndex) => (
                                        <TableCell
                                            key={colIndex}
                                            className={clsx([
                                                (isPageTable && colIndex === 0) && 'pl-4',
                                                (isPageTable && colIndex === columns.length - 1) && 'pr-4',
                                                'whitespace-nowrap px-2 py-3 text-sm text-gray-900 dark:text-white',
                                            ])}>
                                            <Skeleton/>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ),
                        )
                    )}
                    {paddingBottom > 0 && (
                        <TableRow>
                            <TableCell style={{height: `${paddingBottom}px`}}/>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            {
                data.length === 0 && (
                    <NoTableData/>
                )
            }
            {
                (hasInfiniteScroll && !loading) &&
                <InfiniteScroll onIntersect={handleOnIntersect}/>
            }
        </div>
    )
}

export default MyTable