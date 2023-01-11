import { useRouteNavigation } from '../router'
import Button from './Button'

const Navbar = () => {
  const navigate = useRouteNavigation()
  return (
    <nav className='flex justify-between'>
      <div>Navbar</div>
      <Button
        text='Behind the scenes 👩🏻‍🍳'
        onClick={() => navigate('/behind-the-scenes')}
      />
    </nav>
  )
}

export default Navbar
