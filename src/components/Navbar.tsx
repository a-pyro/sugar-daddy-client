import { useLocation } from 'react-router'
import { useRouteNavigation } from '../router'
import Button from './Button'

const Navbar = () => {
  const navigate = useRouteNavigation()
  const { pathname } = useLocation()
  const isBackoffice = pathname.includes('behind-the-scenes')
  const btnText = isBackoffice ? '👩🏻‍🍳 Candy Shop' : '🍭 behind-the-scenes'
  const letsGo = isBackoffice ? '/' : '/behind-the-scenes'

  return (
    <nav className='flex justify-between'>
      <h2>SUGAR DADDY </h2>
      <Button text={btnText} onClick={() => navigate(letsGo)} />
    </nav>
  )
}

export default Navbar
