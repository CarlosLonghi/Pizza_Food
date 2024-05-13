import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Loader, Search, X } from 'lucide-react'
import { useState } from 'react'

import { GetOrdersResponse } from '@/api/order/fetch-orders'
import { approveOrder } from '@/api/order/status/approve'
import { cancelOrder } from '@/api/order/status/cancel'
import { deliverOrder } from '@/api/order/status/deliver'
import { dispatchOrder } from '@/api/order/status/dispatch'
import { OrderStatus } from '@/components/order-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export interface OrderTableRowProps {
  order: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'dispatch' | 'delivered'
    customerName: string
    total: number
  }
}

export function OrderTableRow({ order }: OrderTableRowProps) {
  // Data de pedido fake, pois a API está retornando order.createdAt como null (VERIFICAR)
  const randomHourDay = Math.floor(Math.random() * 24) + 1
  const fakeCreatedAt = new Date()
  fakeCreatedAt.setHours(fakeCreatedAt.getHours() - randomHourDay)

  const fakeOrderDate = formatDistanceToNow(fakeCreatedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const queryClient = useQueryClient()

  function updateOrderStatusOnCache(orderId: string, status: OrderStatus) {
    const cached = queryClient.getQueriesData<GetOrdersResponse>({
      queryKey: ['fetch-orders'],
    })

    cached.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) {
        return
      }

      queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map((order) => {
          if (order.orderId === orderId) {
            return { ...order, status }
          }

          return order
        }),
      })
    })
  }

  const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } =
    useMutation({
      mutationFn: approveOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'processing')
      },
    })

  const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } =
    useMutation({
      mutationFn: cancelOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'canceled')
      },
    })

  const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } =
    useMutation({
      mutationFn: dispatchOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'dispatch')
      },
    })

  const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } =
    useMutation({
      mutationFn: deliverOrder,
      async onSuccess(_, { orderId }) {
        updateOrderStatusOnCache(orderId, 'delivered')
      },
    })

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs" title="Detalhes do pedido">
              <Search className="h-4 w-4" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails open={isDetailsOpen} orderId={order.orderId} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">{fakeOrderDate}</TableCell>

      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {(order.total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        {order.status === 'pending' && (
          <Button
            variant="outline"
            size="xs"
            onClick={() => approveOrderFn({ orderId: order.orderId })}
            disabled={isApprovingOrder}
          >
            Aprovar
            {isApprovingOrder ? (
              <Loader strokeWidth={3} className="ml-2 h-3 w-3 animate-spin" />
            ) : (
              <ArrowRight strokeWidth={3} className="ml-2 h-3 w-3" />
            )}
          </Button>
        )}

        {order.status === 'processing' && (
          <Button
            variant="outline"
            size="xs"
            onClick={() => dispatchOrderFn({ orderId: order.orderId })}
            disabled={isDispatchingOrder}
          >
            Enviar
            {isDispatchingOrder ? (
              <Loader strokeWidth={3} className="ml-2 h-3 w-3 animate-spin" />
            ) : (
              <ArrowRight strokeWidth={3} className="ml-2 h-3 w-3" />
            )}
          </Button>
        )}

        {order.status === 'dispatch' && (
          <Button
            variant="outline"
            size="xs"
            onClick={() => deliverOrderFn({ orderId: order.orderId })}
            disabled={isDeliveringOrder}
          >
            Finalizar
            {isDeliveringOrder ? (
              <Loader strokeWidth={3} className="ml-2 h-3 w-3 animate-spin" />
            ) : (
              <ArrowRight strokeWidth={3} className="ml-2 h-3 w-3" />
            )}
          </Button>
        )}
      </TableCell>
      <TableCell>
        <Button
          disabled={
            !['pending', 'processing'].includes(order.status) ||
            isCancelingOrder
          }
          variant="ghost"
          size="xs"
          onClick={() => cancelOrderFn({ orderId: order.orderId })}
        >
          Cancelar
          <X strokeWidth={3} className="ml-2 h-3 w-3" />
        </Button>
      </TableCell>
    </TableRow>
  )
}
