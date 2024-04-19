import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="Nome do Cliente" className="h-8 w-80" />
        </form>

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
              <TableRow>
                <TableCell>
                  <Button
                    variant="outline"
                    size="xs"
                    title="Detalhes do pedido"
                  >
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Detalhes do pedido</span>
                  </Button>
                </TableCell>
                <TableCell className="font-mono text-xs font-medium">
                  435RFT534
                </TableCell>
                <TableCell className="text-muted-foreground">
                  1 hora atrás
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-600"></span>
                    <span className="font-medium text-muted-foreground">
                      Pendente
                    </span>
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
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
