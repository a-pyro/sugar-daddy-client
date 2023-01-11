import { API_URL } from '../../env'
import { SweetResponse } from '../../types'

export async function getSweets(): Promise<SweetResponse[]> {
  const response = await fetch(`${API_URL}/sweets`)
  return await response.json()
}
