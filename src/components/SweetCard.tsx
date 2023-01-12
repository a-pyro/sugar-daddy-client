import { Button } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { SweetResponse } from '../types'

interface SweetCardProps extends SweetResponse {}

const SweetCard: FunctionComponent<SweetCardProps> = ({
  name,
  description,
  price,
}) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <div>
          <div>descrizione:{description}</div>
        </div>
        <div>prezzo: {price}</div>
        <Button onClick={() => console.log('detail')}>Details</Button>
      </div>
    </>
  )
}

export default SweetCard
