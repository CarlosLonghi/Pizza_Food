import { api } from '@/lib/axios'

export interface GetManagedResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManaged(): Promise<GetManagedResponse> {
  const response = await api.get('/managed-restaurant')

  return response.data
}
