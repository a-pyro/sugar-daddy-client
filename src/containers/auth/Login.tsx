import { Button, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { useRouteNavigation } from '../../router'
import { httpClient } from '../../services/api'
import { LoginUser } from '../../services/api/auth'

// TODO - MERGE THIS WITH REGISTER
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useRouteNavigation()
  const mutation = useMutation(
    (user: LoginUser) =>
      httpClient.login({
        email,
        password,
      }),
    {
      onSuccess: (userResponse) => {
        console.log('submitted 🚣🏻‍♂️')
        console.log({ userResponse })
        navigate('/behind-the-scenes')
      },
      onError: () => {
        console.log('error')
      },
    }
  )
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email || !password) return
    mutation.mutate({ email, password })
    console.log('submitted 🚣🏻‍♂️')
  }
  return (
    <>
      <div>Login</div>
      <form onSubmit={handleSubmit}>
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
        <Button type='submit'>Login</Button>
      </form>
    </>
  )
}

export default Login
