import { useMemo } from 'react'
import { useQuery } from 'react-query'
import Loading from '../../components/Loading'
import SweetCard from '../../components/SweetCard'
import { getSweets } from '../../services/api/sweets'
import { SweetResponse } from '../../types'

/* 
I dolci in vendita invecchiano ed in
base al tempo trascorso dalla loro messa in vendita hanno prezzi diversi: primo giorno prezzo pieno, secondo giorno costano l’80%, il terzo giorno il 20%. Il quarto giorno non sono commestibili e devono essere ritirati dalla vendita.

*/

// TODO - add loading and error states

const SweetlistPage = () => {
  const {
    data: sweets,
    isError,
    isLoading,
  } = useQuery<SweetResponse[]>('sweets', getSweets)

  const today = new Date()

  const mappedSweets = useMemo(
    () =>
      sweets?.map((sweet) => {
        const sweetCreationDate = new Date(sweet.createdAt)
        const diffTime = Math.abs(today.getTime() - sweetCreationDate.getTime())
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

        if (diffDays === 0) {
          return { ...sweet, price: sweet.price }
        }
        if (diffDays === 1) {
          return { ...sweet, price: sweet.price * 0.8 }
        }
        if (diffDays === 2) {
          return { ...sweet, price: sweet.price * 0.2 }
        }
        return { ...sweet, price: 0 }
      }),
    [sweets]
  )

  if (isLoading) return <Loading />
  if (isError) return <div>😱 error</div>

  return (
    <>
      <div>SweetlistPage</div>
      <div className='flex gap-3'>
        {mappedSweets?.map((sweet) =>
          // if price is we don't show the sweet
          sweet.price !== 0 ? (
            <SweetCard key={sweet._id} {...sweet} createdAt='asd' />
          ) : null
        )}
      </div>
    </>
  )
}

export default SweetlistPage
