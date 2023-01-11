import { useQuery } from 'react-query'
import Button from '../../components/Button'
import Loading from '../../components/Loading'
import SweetListItemBO from '../../components/SweetListItemBO'
import { useRouteNavigation } from '../../router'
import { getSweets } from '../../services/api/sweets'
import { SweetResponse } from '../../types'

const SweetlistBO = () => {
  const {
    data: sweets,
    isError,
    isLoading,
  } = useQuery<SweetResponse[]>('sweets', getSweets)
  const navigate = useRouteNavigation()
  if (isLoading) return <Loading />
  if (isError)
    return <Button text='😱 error' onClick={() => window.location.reload()} />
  return (
    <>
      <button onClick={() => navigate('/behind-the-scenes/create')}>
        ADD 🍳
      </button>
      <div>
        {sweets?.map((sweet) => {
          return <SweetListItemBO key={sweet._id} {...sweet} />
        })}
      </div>
    </>
  )
}

export default SweetlistBO
