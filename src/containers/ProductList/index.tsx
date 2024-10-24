import Product from '../../components/Product'
import Game from '../../models/Game'

import { ProductContainer, ProductGrid, Title } from './styles'

export type Props = {
  title: string
  bg: 'grey' | 'black'
  games: Game[]
}

const ProductList = ({ bg, title, games }: Props) => (
  <ProductContainer bg={bg}>
    <div className="container">
      <Title>{title}</Title>
      <ProductGrid>
        {games.map((game) => (
          <Product
            key={game.id}
            title={game.title}
            image={game.image}
            infos={game.infos}
            category={game.category}
            system={game.system}
            description={game.description}
          />
        ))}
      </ProductGrid>
    </div>
  </ProductContainer>
)

export default ProductList
