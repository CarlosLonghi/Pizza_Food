import { UtensilsIcon } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DayOrders() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>

        <UtensilsIcon
          strokeWidth={3}
          className="h-4 w-4 text-muted-foreground"
        />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">10</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-red-500 dark:text-red-400">-15 %</span> em
          relação a ontem
        </p>
      </CardContent>
    </Card>
  )
}
