import Button from '../Button'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'

import Tag from '../Tag'
import IMG from '../../assets/images/star_wars.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={IMG} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 190,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={IMG} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
            <span>R$ 190,90</span>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 0,00 <span>Em até 6x sem juros</span>
      </Prices>
      <Button type="button" title="Clique aqui para continuar com a compra">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
