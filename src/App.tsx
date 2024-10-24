import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'

import { GlobalStyle } from './styles'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
