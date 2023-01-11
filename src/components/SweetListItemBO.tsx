import { FunctionComponent } from 'react'
import { useRouteNavigation } from '../router'
import { SweetResponse } from '../types'

interface SweetListItemBOProps extends SweetResponse {}

const SweetListItemBO: FunctionComponent<SweetListItemBOProps> = ({
  name,
  _id,
}) => {
  const navigate = useRouteNavigation()
  return (
    <div>
      <button
        type='button'
        onClick={() => navigate(`/behind-the-scenes/edit/${_id}`)}
      >
        {name}
      </button>
      <span className='font-bold'>{_id}</span>
    </div>
  )
}

export default SweetListItemBO
