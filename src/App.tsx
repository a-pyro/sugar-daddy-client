import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './containers/home/Home'
import Backoffice from './containers/backoffice/Backoffice'
import Navbar from './components/Navbar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import SweetForm from './forms/SweetForm'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/behind-the-scenes' element={<Backoffice />} />
          <Route path='/behind-the-scenes/create' element={<SweetForm />} />
          <Route path='/behind-the-scenes/edit/:id' element={<SweetForm />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
