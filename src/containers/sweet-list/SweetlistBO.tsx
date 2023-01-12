import { Button } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import Loading from '../../components/Loading'
import SweetListItemBO from '../../components/SweetListItemBO'
import { useRouteNavigation } from '../../router'
import { httpClient } from '../../services/api/sweets'
import { SweetResponse } from '../../types'

const SweetlistBO = () => {
  const {
    data: sweets,
    isError,
    isLoading,
  } = useQuery<SweetResponse[]>('sweets', httpClient.getSweets)
  const navigate = useRouteNavigation()
  if (isLoading) return <Loading />
  if (isError)
    return <Button onClick={() => window.location.reload()}>😱 error</Button>
  return (
    <>
      <Button onClick={() => navigate('/behind-the-scenes/create')}>
        ADD 🍳
      </Button>
      <div>
        {sweets?.map((sweet) => {
          return <SweetListItemBO key={sweet._id} {...sweet} />
        })}
      </div>
    </>
  )
}

export default SweetlistBO
