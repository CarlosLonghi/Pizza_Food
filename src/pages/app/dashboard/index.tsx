import { Helmet } from 'react-helmet-async'

import { DayOrders } from './cards/day-orders'
import { MonthCanceledOrders } from './cards/month-canceled-orders'
import { MonthOrders } from './cards/month-orders'
import { MonthRevenue } from './cards/month-revenue'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenue />
          <MonthOrders />
          <DayOrders />
          <MonthCanceledOrders />
        </div>
      </div>
    </>
  )
}
