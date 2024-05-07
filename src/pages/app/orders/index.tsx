import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableFilters } from './order-table-filters'
import { OrderTableRow } from './order-table-row'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '@/api/get-orders'

export function Orders() {
  const { data: result } = useQuery({
    queryKey: ['get-orders'],
    queryFn: getOrders
  })

  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2">
          <OrderTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16"></TableHead>
                  <TableHead className="w-32">N° Pedido</TableHead>
                  <TableHead className="w-40">Realizado há</TableHead>
                  <TableHead className="w-32">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-48">Total do pedido</TableHead>
                  <TableHead className="w-36"></TableHead>
                  <TableHead className="w-36"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                
                {result && result.orders.map(order => {
                  return <OrderTableRow key={order.orderId} order={order} />
                })}
              </TableBody>
            </Table>
          </div>
        </div>
        <Pagination pageIndex={0} perPage={20} totalCount={30} />
      </div>
    </>
  )
}
