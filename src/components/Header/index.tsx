import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'

import { CartLink, HeaderBar, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'

const Header = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPlay" />
        </Link>
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
      <CartLink onClick={openCart}>
        0 - produto(s)
        <img src={cart} alt="Carrinho" />
      </CartLink>
    </HeaderBar>
  )
}

export default Header
