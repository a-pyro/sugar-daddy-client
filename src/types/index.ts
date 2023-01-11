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

export type CustomPaths = `/behind-the-scenes` | '/' | `/details/${string}`
