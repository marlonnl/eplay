import { Game } from '../../pages/Home'
import Product from '../../components/Product'

import { ProductContainer, ProductGrid, Title } from './styles'
import { priceFormat } from '../../utils'

export type Props = {
  title: string
  bg: 'grey' | 'black'
  games: Game[]
  id?: string
}

const ProductList = ({ bg, title, games, id }: Props) => {
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
    <ProductContainer bg={bg} id={id}>
      <div className="container">
        <Title>{title}</Title>
        <ProductGrid>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                title={game.name}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                category={game.details.category}
                system={game.details.system}
                description={game.description}
              />
            </li>
          ))}
        </ProductGrid>
      </div>
    </ProductContainer>
  )
}

export default ProductList
