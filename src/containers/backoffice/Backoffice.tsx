import { useQuery } from 'react-query'
import { getSweets } from '../../services/api/sweets'
import SweetlistBO from '../sweet-list/SweetlistBO'

const Backoffice = () => {
  return (
    <>
      <div>Backoffice</div>
      <SweetlistBO />
    </>
  )
}

export default Backoffice
