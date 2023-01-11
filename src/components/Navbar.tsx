import Button from './Button'

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
      <div>Navbar</div>
      <Button
        text='Behind the scenes 👩🏻‍🍳'
        onClick={() => console.log(`Don't touch me 🙅🏻‍♂️`)}
      />
    </nav>
  )
}

export default Navbar
