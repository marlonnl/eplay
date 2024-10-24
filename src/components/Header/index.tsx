import { Link } from 'react-router-dom'

import { CartLink, HeaderBar, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EPlay" />
      <nav>
        <Links>
          <LinkItem>
            <Link to={'/categorias'}>Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <CartLink href="#">
      0 - produto(s)
      <img src={cart} alt="Carrinho" />
    </CartLink>
  </HeaderBar>
)

export default Header
