import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Storefront from './containers/storefront/Storefront'
import Backoffice from './containers/backoffice/Backoffice'
import Navbar from './components/Navbar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import SweetForm from './forms/SweetForm'
import SweetDetails from './components/SweetDetails'
import Register from './containers/auth/Register'
import Login from './containers/auth/Login'
import ProtectedRoutes from './containers/auth/ProtectedRoutes'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Storefront />} />
          {/* <Route path='/behind-the-scenes' element={<Backoffice />} /> */}
          {/* <Route path='/behind-the-scenes/create' element={<SweetForm />} /> */}
          {/* <Route path='/behind-the-scenes/edit/:id' element={<SweetForm />} /> */}
          <Route path='/details/:id' element={<SweetDetails />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/behind-the-scenes/create'
            element={
              <ProtectedRoutes>
                <SweetForm />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/behind-the-scenes'
            element={
              <ProtectedRoutes>
                <Backoffice />
              </ProtectedRoutes>
            }
          />
          <Route
            path='/behind-the-scenes/edit/:id'
            element={
              <ProtectedRoutes>
                <SweetForm />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
