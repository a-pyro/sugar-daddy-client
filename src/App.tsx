import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Storefront from './containers/storefront/Storefront'
import Backoffice from './containers/backoffice/Backoffice'
import Navbar from './components/Navbar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import SweetForm from './forms/SweetForm'
import SweetDetails from './components/SweetDetails'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Storefront />} />
          <Route path='/behind-the-scenes' element={<Backoffice />} />
          <Route path='/behind-the-scenes/create' element={<SweetForm />} />
          <Route path='/behind-the-scenes/edit/:id' element={<SweetForm />} />
          <Route path='/details/:id' element={<SweetDetails />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
