import { api } from "@/lib/axios";

export interface GetOrdersQuery {
  pageIndex?: number | null
}

export interface GetOrdersResponse {
  orders: {
    orderId: string;
    createdAt: Date;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }[];
  meta: {
      pageIndex: number;
      perPage: number;
      totalCount: number;
  };
}

export async function getOrders({ pageIndex }: GetOrdersQuery): Promise<GetOrdersResponse> {
  const response = await api.get('/orders', {
    params: {
      pageIndex
    }
  })

  return response.data
}