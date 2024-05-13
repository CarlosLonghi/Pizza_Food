import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenue } from '@/api/metrics/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthRevenue() {
  const { data: MonthRevenue } = useQuery({
    queryFn: getMonthRevenue,
    queryKey: ['metrics', 'month-revenue'],
  })

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>

        <DollarSign strokeWidth={3} className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {MonthRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(MonthRevenue.receipt / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {MonthRevenue.diffFromLastMonth >= 0 ? (
                <span className="text-emerald-500 dark:text-emerald-400">
                  +{MonthRevenue.diffFromLastMonth} %
                </span>
              ) : (
                <span className="text-red-500 dark:text-red-400">
                  {MonthRevenue.diffFromLastMonth} %
                </span>
              )}{' '}
              em relação ao mês passado
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
