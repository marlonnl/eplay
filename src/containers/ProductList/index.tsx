import { Game } from '../../pages/Home'
import Product from '../../components/Product'

import { ProductContainer, ProductGrid, Title } from './styles'

export type Props = {
  title: string
  bg: 'grey' | 'black'
  games: Game[]
}

export const priceFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const ProductList = ({ bg, title, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []

    if (game.release_date) {
      tags.push(game.release_date)
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`)
    }

    if (game.prices.current) {
      tags.push(priceFormat(game.prices.current))
    }

    return tags
  }

  return (
    <ProductContainer bg={bg}>
      <div className="container">
        <Title>{title}</Title>
        <ProductGrid>
          {games.map((game) => (
            <Product
              key={game.id}
              title={game.name}
              image={game.media.thumbnail}
              infos={getGameTags(game)}
              category={game.details.category}
              system={game.details.system}
              description={game.description}
            />
          ))}
        </ProductGrid>
      </div>
    </ProductContainer>
  )
}

export default ProductList
