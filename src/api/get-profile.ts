import { api } from '@/lib/axios'

interface GetProfileResponse {
  id: string
  role: 'manager' | 'customer'
  email: string
  name: string
  phone: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile(): Promise<GetProfileResponse> {
  const response = await api.get('/me')

  return response.data
}
