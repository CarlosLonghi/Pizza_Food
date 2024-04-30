import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '18/04', revenue: 1400 },
  { date: '19/04', revenue: 1800 },
  { date: '20/04', revenue: 1100 },
  { date: '21/04', revenue: 1000 },
  { date: '22/04', revenue: 900 },
  { date: '23/04', revenue: 600 },
  { date: '24/04', revenue: 2000 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diária no periodo</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <CartesianGrid
              className="stroke-muted-foreground"
              strokeDasharray="3"
              vertical={false}
            />

            <XAxis
              stroke={colors.zinc['500']}
              dataKey="date"
              tickLine={false}
              dy={12}
            />
            <YAxis
              stroke={colors.zinc['500']}
              width={68}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <Tooltip
              labelClassName="text-zinc-800"
              formatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              name="receita"
              activeDot={{ r: 6 }}
              stroke={colors.green['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
