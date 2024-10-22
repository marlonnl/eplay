import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalStyle } from './styles'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
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
