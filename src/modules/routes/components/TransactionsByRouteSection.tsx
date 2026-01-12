import {useQuery} from '@apollo/client'
import {MdOutlineCurrencyExchange} from 'react-icons/md'
import InfoCard from '@/components/cards/InfoCard'
import TransactionsQuery from "@/modules/transactions/queries/TransactionsQuery"
import {Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow} from "flowbite-react";

interface Props {
  routeId: string
}

const TransactionsByRouteSection = ({ routeId }: Props) => {
  const { data, loading, error } = useQuery(TransactionsQuery, {
    skip: !routeId,
    variables: {
      routeId: routeId,
    },
  })

  if (loading) return <span>Loading...</span>

  return (
      <InfoCard title="Transacciones" titleIcon={MdOutlineCurrencyExchange}>
          <Table>
              <TableHead>
                  <TableHeadCell>
                      Fecha
                  </TableHeadCell>
                  <TableHeadCell>
                      Descripción
                  </TableHeadCell>
                  <TableHeadCell>
                      Tipo
                  </TableHeadCell>
                  <TableHeadCell>
                      Valor
                  </TableHeadCell>
              </TableHead>
              <TableBody>
                  {
                      data?.transactions?.edges.map(edge => {
                          return (
                              <TableRow>
                                  <TableCell>{edge?.node?.createdAt}</TableCell>
                                  <TableCell>{edge?.node?.description ?? ""}</TableCell>
                                  <TableCell>{edge?.node?.transactionType ?? ""}</TableCell>
                                  <TableCell>{edge?.node?.amount ?? ""}</TableCell>
                              </TableRow>
                          )
                      })
                  }
                  <TableRow>

                  </TableRow>
              </TableBody>
          </Table>
        {error && <span>Create error component</span>}
      </InfoCard>
  )
}

export default TransactionsByRouteSection