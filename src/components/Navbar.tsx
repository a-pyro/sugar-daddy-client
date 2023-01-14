import { Box, Button, Heading, HStack } from '@chakra-ui/react'
import { useLocation } from 'react-router'
import { useRouteNavigation } from '../router'
import { logout } from '../services/api/auth'

// TODO - Add info about user logged in

const Navbar = () => {
  const navigate = useRouteNavigation()
  const { pathname } = useLocation()
  const isBackoffice = pathname.includes('behind-the-scenes')
  const btnText = isBackoffice ? '👩🏻‍🍳 Candy Shop' : '🍭 behind-the-scenes'
  const letsGo = isBackoffice ? '/' : '/behind-the-scenes'
  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <HStack marginTop={3}>
      <Heading as='h2' size={'md'} marginRight={'auto'}>
        SUGAR DADDY
      </Heading>
      <Button colorScheme={'pink'} onClick={() => navigate(letsGo)}>
        {btnText}
      </Button>
      {pathname.includes('behind-the-scenes') && (
        <>
          <Button colorScheme={'cyan'} onClick={handleLogout}>
            👋🏻 Logout
          </Button>
        </>
      )}
    </HStack>
  )
}

export default Navbar
