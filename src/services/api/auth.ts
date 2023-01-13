import { API_URL } from '../../env'

export interface User {
  email: string
  password: string
  name: string
}

export interface LoginUser extends Omit<User, 'name'> {}

export interface UserResponse extends User {
  _id: string
  token: string
}

export async function register(user: User) {
  await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
}

export async function login(user: LoginUser): Promise<UserResponse> {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  return await response.json()
}
