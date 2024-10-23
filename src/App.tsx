import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Banner from './components/Banner'
import Header from './components/Header'
import ProductList from './containers/ProductList'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductList title="Promoções" bg="grey" />
        <ProductList title="Em breve" bg="black" />
      </>
    )
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
