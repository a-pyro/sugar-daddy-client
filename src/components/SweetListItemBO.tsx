import { FunctionComponent } from 'react'
import { SweetResponse } from '../types'

interface SweetListItemBOProps extends SweetResponse {}

const SweetListItemBO: FunctionComponent<SweetListItemBOProps> = ({ name }) => {
  return (
    <div>
      <button type='button' onClick={() => console.log('clicked')}>
        {name}
      </button>
    </div>
  )
}

export default SweetListItemBO
