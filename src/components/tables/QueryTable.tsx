import type { SortingState } from '@tanstack/react-table'
import type { MyTableProps } from '@/components/tables/MyTable/types'
import type { DocumentNode, WatchQueryFetchPolicy } from '@apollo/client'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { MyTable } from '@components'
import { Maybe, Node, Scalars } from '@types'
import { GRAPHQL_PAGE_SIZE } from '@constants'
import { useFilters, useQueryVariables } from '@hooks'

interface Props<T> extends Omit<MyTableProps<T>, 'data'> {
  accessor: string
  fetchPolicy?: WatchQueryFetchPolicy
  query: DocumentNode | TypedDocumentNode
}

type Edge = {
  __typename?: string
  cursor: Scalars['String']['output']
  node?: Maybe<Node>
}

const defaultSortingFromQueryParams = (orderBy: string | undefined): SortingState => {
  if (orderBy === undefined)
    throw new Error('orderBy should be a string, not null')

  return [{
    id: orderBy.replace('-', ''),
    desc: orderBy.indexOf('-') > -1,
  }]
}

const QueryTable = <T extends Edge>({
                                      accessor,
                                      columns,
                                      fetchPolicy,
                                      query,
                                      maxSkeletonRows,
                                      infiniteScroll,
                                      ...rest
                                    }: Props<T>) => {
  const variables = useQueryVariables()
  const { get, set, has, remove } = useFilters()
  const [searchParamsLoaded, setSearchParamsLoaded] = useState<boolean>(false)
  const [count, setCount] = useState<number>(GRAPHQL_PAGE_SIZE)
  const [fetch, { loading, error, data, called, fetchMore }] = useLazyQuery(query, {
    ...(fetchPolicy && { fetchPolicy }),
    notifyOnNetworkStatusChange: true,
    variables,
    onCompleted: (data) => {
      if (data) {
        const totalCount = parseInt(data[accessor]?.totalCount ?? 0)
        const dataLength = data[accessor]?.edges.length || 0
        const subtraction = totalCount - dataLength
        const total = (subtraction > 0 && subtraction < GRAPHQL_PAGE_SIZE) ? (subtraction) : GRAPHQL_PAGE_SIZE
        setCount(total)
      }
    },
  })
  // TODO use variables instead of searchParams here
  const [sorting, setSorting] = useState<SortingState>(
      (has('orderBy')) ? defaultSortingFromQueryParams(get('orderBy')) : [])

  useEffect(() => {
    setSearchParamsLoaded(true)
  }, [])

  useEffect(() => {
    if (sorting.length > 0) {
      const sort = sorting[0]
      set('orderBy', sort.desc ? `-${sort.id}` : sort.id)
    } else {
      remove('orderBy')
    }
  }, [sorting])

  useEffect(() => {
    if (searchParamsLoaded || called) {
      fetch({
        variables,
      })
    }
  }, [called, variables, searchParamsLoaded, fetch])

  if (error)
    return <div>Create error component</div>

  return (
      <MyTable<T>
          columns={columns}
          data={data ? data[accessor]?.edges as T[] : []}
          fixedRowHeight
          infiniteScroll={infiniteScroll ?? (data && data[accessor]?.pageInfo.hasNextPage) ?? false}
          loading={loading}
          maxSkeletonRows={maxSkeletonRows ? maxSkeletonRows : count}
          showSkeletonRows={!(infiniteScroll !== undefined && !infiniteScroll && data)}
          sorting={sorting}
          totalCount={data ? parseInt(data[accessor]?.totalCount ?? 0) : 0}

          getRowId={(row, index) => row.node?.id ?? index.toString()}
          onSortingChange={setSorting}
          onInfiniteScroll={async () => {
            if (data && data[accessor]?.pageInfo.hasNextPage)
              await fetchMore({
                variables: {
                  after: data[accessor].pageInfo.endCursor,
                },
              })
          }}
          {...rest}
      />
  )
}

export default QueryTable