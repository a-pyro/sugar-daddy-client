import { Box, Button, ButtonSpinner } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useMutation } from 'react-query'
import { SweetResponse } from '../types'

interface SweetListItemBOProps extends SweetResponse {
  onItemClick: () => void
  onItemDelete: () => void
}

const SweetListItemBO: FunctionComponent<SweetListItemBOProps> = ({
  name,
  _id,
  onItemClick,
  onItemDelete,
}) => {
  return (
    <Box marginY={3}>
      <Button type='button' onClick={() => onItemClick()}>
        {name} - {_id}
      </Button>
      <Button onClick={() => onItemDelete()} colorScheme={'pink'}>
        🚮
      </Button>
    </Box>
  )
}

export default SweetListItemBO
