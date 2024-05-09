type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em transito',
  delivered: 'Entregue',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="h-2 w-2 rounded-full bg-slate-500" />
      )}
      {status === 'canceled' && (
        <span className="h-2 w-2 rounded-full bg-red-600" />
      )}
      {status === 'processing' && (
        <span className="h-2 w-2 rounded-full bg-amber-600" />
      )}
      {status === 'delivering' && (
        <span className="h-2 w-2 rounded-full bg-indigo-600" />
      )}
      {status === 'delivered' && (
        <span className="h-2 w-2 rounded-full bg-emerald-600" />
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
