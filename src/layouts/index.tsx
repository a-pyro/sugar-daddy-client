import { HStack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <HStack>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </HStack>
  )
}

export default DefaultLayout
