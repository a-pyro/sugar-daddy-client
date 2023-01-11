import { useState, useEffect } from 'react'
import { API_URL } from './env'

function App() {
  // Test call api
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch(`${API_URL}/sweets`)
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])
  return (
    <>
      <h1 className='text-3xl font-bold'>Hello world!</h1>
      {JSON.stringify(data)}
    </>
  )
}

export default App
