import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Game } from './pages/Game'

function App() {
  const router = createBrowserRouter([
    {
      path:'',
      element: <Home />
    },
    {
      path:'game',
      element: <Game />
    }
  ],
  {
    basename: '/The-Dice'
  }
)

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
