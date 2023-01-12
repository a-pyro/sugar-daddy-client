import { useState, useEffect } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useParams } from 'react-router'
import { useLocation } from 'react-router'
import { Button, Input } from '@chakra-ui/react'
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

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState<number>()
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

  useEffect(() => {
    if (isCreate) return
    httpClient.getSweet(params.id!).then((data) => {
      setName(data?.name)
      setDescription(data?.description)
      setPrice(data?.price)
      setId(data?._id)
    })
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name || !description || !price) return
    if (isCreate) mutation.mutate({ name, description, price } as SweetResponse)
    else mutation.mutate({ name, description, price, _id } as SweetResponse)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>SweetForm</div>
        <div>
          <label htmlFor='name'>Name</label>
          <Input
            type='text'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <Input
            id='description'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='price'>Price</label>
          <Input
            type='number'
            id='price'
            value={price ?? ''}
            onChange={(event) => setPrice(Number(event.target.value))}
          />
        </div>
        <Button type='submit'>{btnText}</Button>
      </form>
    </div>
  )
}

export default SweetForm
