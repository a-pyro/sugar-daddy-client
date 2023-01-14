import { useRouteNavigation } from './../../router/index'
import { API_URL } from '../../env'
import Cookies from 'universal-cookie'
import { CustomPaths } from '../../types'
const cookies = new Cookies()

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
  const data: UserResponse = await response.json()
  // setto il cookie con il token su tutte le rotte
  cookies.set('token', data.token, { path: '/' })
  // redirect user to the auth page
  return data
}

export function logout() {
  console.log('me logout')
  cookies.remove('token', { path: '/' })
}
