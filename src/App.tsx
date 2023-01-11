import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './containers/home/Home'
import Backoffice from './containers/backoffice/Backoffice'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/backoffice' element={<Backoffice />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
