import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from './order-details'

export function OrderTableRow() {
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
      <TableCell className="font-mono text-xs font-medium">435RFT534</TableCell>
      <TableCell className="text-muted-foreground">1 hora atrás</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-600"></span>
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Carlos Longhi</TableCell>
      <TableCell className="font-medium">R$ 100,00</TableCell>
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
