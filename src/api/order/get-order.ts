import { api } from '@/lib/axios'

export interface GetOrderDetailsParams {
  orderId: string
}

export interface GetOrderDetailsResponse {
  id: string
  createdAt: string | null
  status: 'pending' | 'canceled' | 'processing' | 'dispatch' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }
}

export async function getOrderDetails({
  orderId,
}: GetOrderDetailsParams): Promise<GetOrderDetailsResponse> {
  const response = await api.get(`/orders/${orderId}`)

  return response.data
}