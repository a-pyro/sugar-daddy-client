interface MongoDocument {
  _id: string
  createdAt: string
  updatedAt: string
}

export interface Ingredient {
  name: string
  quantity: number
  unit: string
}

export interface IngredientResponse extends Ingredient, MongoDocument {}

export interface Sweet {
  name: string
  price: number
  description: string
  ingredients: Ingredient[]
}

export interface SweetResponse
  extends Omit<Sweet, 'ingredients'>,
    MongoDocument {
  ingredients: IngredientResponse[]
}

export interface mappedSweetResponse extends SweetResponse {
  sweetAge: number
}

type BackofficePaths =
  | '/behind-the-scenes'
  | '/behind-the-scenes/create'
  | `/behind-the-scenes/edit/${string}`

type StorefrontPaths = '/' | `/details/${string}`

type AuthPath = '/login' | '/register'

export type CustomPaths = BackofficePaths | StorefrontPaths | AuthPath
