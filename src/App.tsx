import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './containers/home/Home'
import Backoffice from './containers/backoffice/Backoffice'
import Navbar from './components/Navbar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/behind-the-scenes' element={<Backoffice />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
