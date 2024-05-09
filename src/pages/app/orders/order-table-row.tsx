import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'
import { OrderStatus } from '@/components/order-status'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export interface OrderTableRowProps {
  order: {
    orderId: string;
    createdAt: Date;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }
}

export function OrderTableRow({ order }: OrderTableRowProps) {

  // Data de pedido fake, pois a API está retornando order.createdAt como null (VERIFICAR)
  const randomHourDay = Math.floor(Math.random() * 24) + 1;
  const fakeCreatedAt = new Date();
  fakeCreatedAt.setHours(fakeCreatedAt.getHours() - randomHourDay);

  const fakeOrderDate = formatDistanceToNow(fakeCreatedAt, {locale: ptBR, addSuffix: true})

  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs" title="Detalhes do pedido">
              <Search className="h-4 w-4" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">{order.orderId}</TableCell>
      <TableCell className="text-muted-foreground">
        {fakeOrderDate}
      </TableCell>

      <TableCell>
        <OrderStatus status={order.status}/>
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {order.total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </TableCell>
      <TableCell>
        <Button variant="outline" size="xs">
          Aprovar
          <ArrowRight strokeWidth={3} className="ml-2 h-3 w-3" />
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="xs">
          Cancelar
          <X strokeWidth={3} className="ml-2 h-3 w-3" />
        </Button>
      </TableCell>
    </TableRow>
  )
}
