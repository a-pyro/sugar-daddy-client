import { Button, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { useRouteNavigation } from '../../router'
import { httpClient } from '../../services/api'
import { User } from '../../services/api/auth'
// TODO - MERGE THIS WITH LOGIN
const Register = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useRouteNavigation()
  const mutation = useMutation(
    (user: User) =>
      httpClient.register({
        name,
        email,
        password,
      }),
    {
      onSuccess: () => {
        console.log('submitted 🚣🏻‍♂️')
        navigate('/behind-the-scenes')
      },
      onError: () => {
        console.log('error')
      },
    }
  )
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name || !email || !password) return
    mutation.mutate({ name, email, password })
    console.log('submitted 🚣🏻‍♂️')
  }
  return (
    <>
      <div>Register</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>name</label>
        <Input
          required
          type='name'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor='email'>Email</label>
        <Input
          required
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <Input
          required
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type='submit'>Register</Button>
      </form>
    </>
  )
}

export default Register
