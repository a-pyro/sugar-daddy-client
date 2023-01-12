import { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router'
import { useLocation } from 'react-router'
import { Button, Divider, Heading, Input } from '@chakra-ui/react'
import { useRouteNavigation } from '../router'
import { httpClient } from '../services/api/sweets'
import { IngredientResponse, SweetResponse } from '../types'

// TODO - probabaly better use a select for ingredients => to implement with API CRUD for ingredients, create new entities ecc
// TODO - Extract ingredient form to a component
// TODO - ArrayInputField could probably be extracted in generic component

const SweetForm = () => {
  const params = useParams()
  const { pathname } = useLocation()
  const navigate = useRouteNavigation()
  const isCreate = pathname.includes('create')
  const btnText = isCreate ? 'Create' : 'Update'
  const httpFunction = isCreate
    ? httpClient.createSweet
    : httpClient.updateSweet

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState<number>()
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
  const [_id, setId] = useState('')

  const mutation = useMutation((sweet: SweetResponse) => httpFunction(sweet), {
    onSuccess: () => {
      console.log('submitted 🚣🏻‍♂️')
      navigate('/behind-the-scenes')
    },
    onError: () => {
      console.log('error')
    },
  })

  // fetch if is update
  useEffect(() => {
    if (isCreate) return
    httpClient.getSweet(params.id!).then((data) => {
      setName(data?.name)
      setDescription(data?.description)
      setPrice(data?.price)
      setId(data?._id)
      setIngredients(data?.ingredients)
    })
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name || !description || !price) return
    if (isCreate) mutation.mutate({ name, description, price } as SweetResponse)
    else
      mutation.mutate({
        name,
        description,
        price,
        _id,
        ingredients: ingredients.map((ingredient) => ({
          name: ingredient.name,
          quantity: ingredient.quantity,
          unit: ingredient.unit,
        })),
      } as SweetResponse)
  }

  const handleIngredientChange = (
    idx: number,
    propToChange: 'name' | 'quantity' | 'unit',
    value: string
  ) => {
    const newIngredients = [...ingredients]
    newIngredients[idx] = {
      ...newIngredients[idx],
      [propToChange]: propToChange === 'quantity' ? Number(value) : value,
    }
    setIngredients(newIngredients)
  }

  const handleAddInputField = () => {
    setIngredients([
      ...ingredients,
      {
        name: '',
        quantity: 0,
        unit: '',
        _id: `${Math.random()}`, // TODO - fix this
      } as IngredientResponse, // TODO - fix this and all casting like this done elsewhere
    ])
  }
  const handleRemoveInputField = (idx: number) => {
    const newIngredients = [...ingredients]
    newIngredients.splice(idx, 1)
    setIngredients(newIngredients)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Heading as={'h3'}>SweetForm</Heading>
        <div>
          <label htmlFor='name'>Name</label>
          <Input
            required
            type='text'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <Input
            required
            type='text'
            id='description'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='price'>Price</label>
          <Input
            required
            type='number'
            id='price'
            value={price ?? ''}
            onChange={(event) => setPrice(Number(event.target.value))}
          />
        </div>
        <Heading as={'h6'} size={'md'}>
          Ingredients
        </Heading>
        <div>
          {ingredients.map((ingredient, idx) => {
            return (
              <div key={ingredient._id}>
                <div>
                  <label htmlFor='ingName'>Name</label>
                  <Input
                    required
                    type='text'
                    id='ingName'
                    value={ingredients[idx].name}
                    onChange={(e) =>
                      handleIngredientChange(idx, 'name', e.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor='quantity'>Quantity</label>
                  <Input
                    required
                    type='number'
                    id='quantity'
                    value={ingredients[idx].quantity ?? ''}
                    onChange={(e) =>
                      handleIngredientChange(idx, 'quantity', e.target.value)
                    }
                  />
                </div>
                <div>
                  <label htmlFor='unit'>Unit</label>
                  <Input
                    required
                    type='text'
                    id='unit'
                    value={ingredients[idx].unit}
                    onChange={(e) =>
                      handleIngredientChange(idx, 'unit', e.target.value)
                    }
                  />
                </div>
                <div>
                  <Button
                    onClick={() => handleRemoveInputField(idx)}
                    marginTop={4}
                    colorScheme={'red'}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <Button
          onClick={handleAddInputField}
          marginTop={4}
          colorScheme={'teal'}
        >
          ADD
        </Button>
        <Divider marginY={5} />
        <Button marginTop={4} type='submit'>
          {btnText}
        </Button>
      </form>
    </div>
  )
}

export default SweetForm
