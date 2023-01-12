import { Button } from '@chakra-ui/react'
import { useLocation } from 'react-router'
import { useRouteNavigation } from '../router'

const Navbar = () => {
  const navigate = useRouteNavigation()
  const { pathname } = useLocation()
  const isBackoffice = pathname.includes('behind-the-scenes')
  const btnText = isBackoffice ? '👩🏻‍🍳 Candy Shop' : '🍭 behind-the-scenes'
  const letsGo = isBackoffice ? '/' : '/behind-the-scenes'

  return (
    <nav>
      <h2>SUGAR DADDY </h2>
      <Button onClick={() => navigate(letsGo)}>{btnText}</Button>
    </nav>
  )
}

export default Navbar
