import { Box, Button, ButtonSpinner } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useMutation } from 'react-query'
import { useRouteNavigation } from '../router'
import { httpClient } from '../services/api/sweets'
import { SweetResponse } from '../types'
import { useQueryClient } from 'react-query'

interface SweetListItemBOProps extends SweetResponse {}

const SweetListItemBO: FunctionComponent<SweetListItemBOProps> = ({
  name,
  _id,
}) => {
  const navigate = useRouteNavigation()
  const queryClient = useQueryClient()

  const mutation = useMutation(() => httpClient.deleteSweet(_id), {
    onSuccess: () => {
      queryClient.refetchQueries('sweets')
      console.log('deleted')
    },
    onError: () => {
      console.log('error')
    },
  })

  if (mutation.isLoading) return <ButtonSpinner />

  return (
    <Box marginY={3}>
      <Button
        type='button'
        onClick={() => navigate(`/behind-the-scenes/edit/${_id}`)}
      >
        {name} - {_id}
      </Button>
      <Button onClick={() => mutation.mutate()} colorScheme={'pink'}>
        🚮
      </Button>
    </Box>
  )
}

export default SweetListItemBO
