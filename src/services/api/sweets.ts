import { Sweet } from './../../types/index'
import { API_URL } from '../../env'
import { SweetResponse } from '../../types'

export async function getSweets(): Promise<SweetResponse[]> {
  const response = await fetch(`${API_URL}/sweets`)
  return await response.json()
}

export async function createSweet(sweet: Sweet): Promise<SweetResponse> {
  const response = await fetch(`${API_URL}/sweets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sweet),
  })
  return await response.json()
}

export async function deleteSweet(id: string): Promise<void> {
  await fetch(`${API_URL}/sweets/${id}`, {
    method: 'DELETE',
  })
}

export async function updateSweet(
  sweet: SweetResponse
): Promise<SweetResponse> {
  const response = await fetch(`${API_URL}/sweets/${sweet._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(sweet),
  })
  return await response.json()
}

export async function getSweet(id: string): Promise<SweetResponse> {
  const response = await fetch(`${API_URL}/sweets/${id}`)
  return await response.json()
}
