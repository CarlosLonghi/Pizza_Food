import { Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

export function OrderTableSkeleton() {
  return Array.from({ length: 10 }).map((_, i) => {
    return (
      <TableRow key={i}>
        <TableCell>
          <Button
            disabled
            variant="outline"
            size="xs"
            title="Detalhes do pedido"
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Detalhes do pedido</span>
          </Button>
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 w-40" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4 max-w-64" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4" />
        </TableCell>

        <TableCell>
          <Skeleton className="h-4" />
        </TableCell>
      </TableRow>
    )
  })
}
