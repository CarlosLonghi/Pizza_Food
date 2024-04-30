import { PieChartIcon } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { product: 'Calabresa', amount: 60 },
  { product: 'Coca Cola', amount: 20 },
  { product: 'Quatro Queijos', amount: 70 },
  { product: 'Mussarela', amount: 20 },
  { product: 'Fanta', amount: 40 },
  { product: 'Suco', amount: 40 },
  { product: 'Doce', amount: 30 },
  { product: 'Sprite', amount: 100 },
]

const COLORS = [
  colors.amber['600'],
  colors.fuchsia['600'],
  colors.indigo['600'],
  colors.orange['600'],
  colors.purple['600'],
  colors.stone['600'],
  colors.sky['600'],
  colors.yellow['600'],
]

export function PopularProductsChart() {
  return (
    <Card className="col-span-4">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <PieChartIcon className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Tooltip
              labelClassName="text-zinc-800"
              formatter={(value: number) => value + ' unidades'}
            />
            <Pie
              strokeWidth={2}
              data={data}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={70}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 6 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 10
                      ? data[index].product.substring(0, 10).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-80"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
