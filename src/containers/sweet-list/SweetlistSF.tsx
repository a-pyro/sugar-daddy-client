import { Button } from '@chakra-ui/react'
import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { Navigate } from 'react-router'
import Loading from '../../components/Loading'
import SweetCard from '../../components/SweetCard'
import { useRouteNavigation } from '../../router'
import { httpClient } from '../../services/api/sweets'
import { SweetResponse } from '../../types'

/* 
I dolci in vendita invecchiano ed in
base al tempo trascorso dalla loro messa in vendita hanno prezzi diversi: primo giorno prezzo pieno, secondo giorno costano l’80%, il terzo giorno il 20%. Il quarto giorno non sono commestibili e devono essere ritirati dalla vendita.

*/

// TODO - add loading and error states

const SweetlistSF = () => {
  const {
    data: sweets,
    isError,
    isLoading,
  } = useQuery<SweetResponse[]>('sweets', httpClient.getSweets)
  const navigate = useRouteNavigation()

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

  const handleCardCtaClick = (id: string) => navigate(`/details/${id}`)

  if (isLoading) return <Loading />
  if (isError)
    return (
      <Button onClick={() => window.location.reload()} colorScheme='red'>
        😱 error
      </Button>
    )

  return (
    <>
      <div>SweetlistPage</div>
      <div>
        {mappedSweets?.map((sweet) =>
          // if price is we don't show the sweet
          sweet.price !== 0 ? (
            <SweetCard
              key={sweet._id}
              {...sweet}
              createdAt='asd'
              onCtaClick={() => handleCardCtaClick(sweet._id)}
            />
          ) : null
        )}
      </div>
    </>
  )
}

export default SweetlistSF
