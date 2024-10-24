import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalStyle } from './styles'

import Home from './pages/Home'
import Header from './components/Header'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
