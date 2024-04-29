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
  { date: '18/04', receita: 1400 },
  { date: '19/04', receita: 1800 },
  { date: '20/04', receita: 1100 },
  { date: '21/04', receita: 1000 },
  { date: '22/04', receita: 900 },
  { date: '23/04', receita: 600 },
  { date: '24/04', receita: 2000 },
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
            <CartesianGrid strokeDasharray="4 4" />

            <XAxis
              stroke={colors.zinc['200']}
              dataKey="date"
              tickLine={false}
              dy={12}
            />
            <YAxis
              stroke={colors.zinc['200']}
              width={68}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <Tooltip labelClassName="text-zinc-800" />
            <Line
              type="monotone"
              strokeWidth={2}
              dataKey="receita"
              activeDot={{ r: 6 }}
              stroke={colors.green['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
