import { useQuery } from '@tanstack/react-query'
import { UtensilsIcon } from 'lucide-react'

import { getDayOrdersAmount } from '@/api/metrics/get-day-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricSkeleton } from './metric-skeleton'

export function DayOrders() {
  const { data: dayOrdersAmount, isFetching: isLoadingDayOrdersAmount } =
    useQuery({
      queryFn: getDayOrdersAmount,
      queryKey: ['metrics', 'day-orders-amount'],
    })

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
        {isLoadingDayOrdersAmount && <MetricSkeleton />}

        {dayOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersAmount.diffFromYesterday > 0 && (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{dayOrdersAmount.diffFromYesterday} %
                  </span>{' '}
                  em relação a ontem
                </>
              )}
              {dayOrdersAmount.diffFromYesterday < 0 && (
                <>
                  <span className="text-red-500 dark:text-red-400">
                    {dayOrdersAmount.diffFromYesterday} %
                  </span>{' '}
                  em relação a ontem
                </>
              )}
              {dayOrdersAmount.diffFromYesterday === 0 && (
                <span>Sem pedidos por enquanto</span>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
