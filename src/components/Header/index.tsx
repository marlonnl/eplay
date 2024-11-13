import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { RootReducer } from '../../store'
import { useState } from 'react'

import { open } from '../../store/reducers/cart'

import {
  CartLink,
  Hamburger,
  HeaderBar,
  HeaderRow,
  LinkItem,
  Links,
  NavMobile
} from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/carrinho.svg'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburger onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburger>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPlay" />
            </h1>
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to={'/categorias'}
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartLink role="button" onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={cart} alt="Carrinho" />
        </CartLink>
      </HeaderRow>

      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link to={'/categorias'} onClick={() => setIsMenuOpen(false)}>
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
