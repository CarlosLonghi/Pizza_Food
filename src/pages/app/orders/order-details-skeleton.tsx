import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetailsSkeleton() {
  return (
    <div className="space-y-6">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="text-muted-foreground">Status</TableCell>
            <TableCell className="flex w-full justify-end">
              <Skeleton className="h-5 w-20" />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Cliente</TableCell>
            <TableCell className="flex w-full justify-end">
              <Skeleton className="h-5 w-36" />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Contato</TableCell>
            <TableCell className="flex w-full justify-end">
              <Skeleton className="h-5 w-32" />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Email</TableCell>
            <TableCell className="flex w-full justify-end">
              <Skeleton className="h-5 w-40" />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">
              Realizado há
            </TableCell>
            <TableCell className="flex w-full justify-end">
              <Skeleton className="h-5" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead className="text-right">Qtd.</TableHead>
            <TableHead className="text-right">Preço</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 2 }).map((_, i) => {
            return (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-5 w-36" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-5" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-5" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-5" />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total do pedido</TableCell>
            <TableCell className="text-right font-medium">
              <Skeleton className="h-5" />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
