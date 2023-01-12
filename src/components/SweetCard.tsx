import { Button } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { SweetResponse } from '../types'

interface SweetCardProps extends SweetResponse {
  onCtaClick: () => void
}

const SweetCard: FunctionComponent<SweetCardProps> = ({
  name,
  description,
  price,
  onCtaClick,
}) => {
  return (
    <>
      <div>
        <h1>{name}</h1>
        <div>
          <div>descrizione:{description}</div>
        </div>
        <div>prezzo: {price}</div>
        <Button onClick={onCtaClick}>Details</Button>
      </div>
    </>
  )
}

export default SweetCard
