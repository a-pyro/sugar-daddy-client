import { Button } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { useRouteNavigation } from '../router'
import { httpClient } from '../services/api/sweets'
import { SweetResponse } from '../types'
import Loading from './Loading'
// TODO - handle no ingredients

const SweetDetails = () => {
  const { id } = useParams<{ id: string }>()
  const {
    data: sweet,
    isError,
    isLoading,
  } = useQuery<SweetResponse>('sweet', () => httpClient.getSweet(id!))
  const navigate = useRouteNavigation()

  if (isLoading) return <Loading />
  if (isError) return <div>😱 error</div> // TODO: add error component
  if (!sweet) return null // TODO: handle this

  return (
    <>
      <div>SweetDetails - Ingredients</div>
      {sweet.ingredients.map((ingredient) => (
        <div key={ingredient._id}>
          {ingredient.name} - {ingredient.quantity} - {ingredient.unit}
        </div>
      ))}
      <Button onClick={() => navigate('/')}>Back</Button>
    </>
  )
}

export default SweetDetails
