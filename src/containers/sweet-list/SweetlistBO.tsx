import { Button } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import Loading from '../../components/Loading'
import SweetListItemBO from '../../components/SweetListItemBO'
import { useRouteNavigation } from '../../router'
import { httpClient } from '../../services/api'
import { SweetResponse } from '../../types'
import { useQueryClient, useMutation } from 'react-query'

const SweetlistBO = () => {
  const {
    data: sweets,
    isError,
    isLoading,
  } = useQuery<SweetResponse[]>('sweets', httpClient.getSweets)
  const navigate = useRouteNavigation()
  const queryClient = useQueryClient()

  const mutation = useMutation((id: string) => httpClient.deleteSweet(id), {
    onSuccess: () => queryClient.refetchQueries('sweets'),
    onError: () => {
      console.log('error')
    },
  })

  const handleItemClick = (id: string) =>
    navigate(`/behind-the-scenes/edit/${id}`)
  if (isLoading) return <Loading />
  if (isError) return <Button onClick={() => navigate('/')}>😱 error</Button>
  return (
    <>
      <Button onClick={() => navigate('/behind-the-scenes/create')}>
        ADD 🍳
      </Button>
      <div>
        {sweets?.map((sweet) => {
          return (
            <SweetListItemBO
              key={sweet._id}
              {...sweet}
              onItemClick={() => handleItemClick(sweet._id)}
              onItemDelete={() => mutation.mutate(sweet._id)}
            />
          )
        })}
      </div>
    </>
  )
}

export default SweetlistBO
