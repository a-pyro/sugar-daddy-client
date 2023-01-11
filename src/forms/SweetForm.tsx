import { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router'
import { useLocation } from 'react-router'
import Button from '../components/Button'
import { useRouteNavigation } from '../router'
import { httpClient } from '../services/api/sweets'
import { SweetResponse } from '../types'

const SweetForm = () => {
  const params = useParams()
  const { pathname } = useLocation()
  const navigate = useRouteNavigation()
  const isCreate = pathname.includes('create')
  const btnText = isCreate ? 'Create' : 'Update'
  const httpFunction = isCreate
    ? httpClient.createSweet
    : httpClient.updateSweet

  const [name, setName] = useState<string | undefined>()
  const [description, setDescription] = useState<string | undefined>()
  const [price, setPrice] = useState<number | undefined>()

  const mutation = useMutation((sweet: SweetResponse) => httpFunction(sweet), {
    onSuccess: () => {
      console.log('submitted 🚣🏻‍♂️')
      navigate('/behind-the-scenes')
    },
    onError: () => {
      console.log('error')
    },
  })

  useEffect(() => {
    if (isCreate) return
    const { data } = useQuery('sweet', () => httpClient.getSweet(params.id!))
    if (!data) return // TODO handle error
    setName(data.name)
    setDescription(data.description)
    setPrice(data.price)
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name || !description || !price) return
    mutation.mutate({ name, description, price } as SweetResponse)
  }

  return (
    <div className='flex justify-center content-center'>
      <form onSubmit={handleSubmit}>
        <div>SweetForm</div>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            className='border-teal-800 border'
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            className='border-teal-800 border'
            name='description'
            id='description'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='price'>Price</label>
          <input
            className='border-teal-800 border'
            type='number'
            name='price'
            id='price'
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
          />
        </div>
        <Button isSubmit text={btnText} />
      </form>
    </div>
  )
}

export default SweetForm
