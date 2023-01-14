import { Button, Heading } from '@chakra-ui/react'
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
  if (pathname.includes('behind-the-scenes'))
    return (
      <>
        <Heading as={'h3'} size='md'>
          Wellcome 👩🏻‍🍳
        </Heading>
        <Button onClick={handleLogout}>Logout</Button>
      </>
    )

  return (
    <nav>
      <h2>SUGAR DADDY </h2>
      <Button onClick={() => navigate(letsGo)}>{btnText}</Button>
    </nav>
  )
}

export default Navbar
