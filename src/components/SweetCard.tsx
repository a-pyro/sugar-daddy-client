import { FunctionComponent } from 'react'
import { SweetResponse } from '../types'
import Button from './Button'

interface SweetCardProps extends SweetResponse {}

const SweetCard: FunctionComponent<SweetCardProps> = ({
  name,
  description,
  price,
}) => {
  return (
    <>
      <div className='flex flex-col max-w-xs border-fuchsia-900 border rounded-md py-3 px-3'>
        <h2 className='text-xl font-bold'>{name}</h2>
        <div className='flex flex-col'>
          <div className='text-md'>descrizione:{description}</div>
        </div>
        <div className='text-lg'>prezzo: {price}</div>
        <Button text='Details' onClick={() => console.log('detail')} />
      </div>
    </>
  )
}

export default SweetCard
