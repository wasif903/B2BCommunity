import { useRoutes } from 'react-router-dom'
import './App.css'
import sellerRoutes from './Router/SellerRoutes'


function App() {

  const element = useRoutes(sellerRoutes)

  return (
    <>
      {
        element
      }
    </>
  )
}

export default App
