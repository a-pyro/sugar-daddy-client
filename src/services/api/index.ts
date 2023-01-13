import {
  getSweets,
  createSweet,
  deleteSweet,
  updateSweet,
  getSweet,
} from './sweets'
import { register, login } from './auth'

export const httpClient = {
  getSweets,
  createSweet,
  deleteSweet,
  updateSweet,
  getSweet,
  register,
  login,
}
