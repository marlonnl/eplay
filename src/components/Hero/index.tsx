import { useDispatch } from 'react-redux'
import { Banner, GameInfo } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'
import { priceFormat } from '../../utils'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <GameInfo>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>de {priceFormat(game.prices.old)}</span>
            )}
            {game.prices.current && <>por {priceFormat(game.prices.current)}</>}
          </p>

          {game.prices.current && (
            <Button
              variant="primary"
              type="button"
              title="Clique aqui para adicionar ao carinho"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </GameInfo>
      </div>
    </Banner>
  )
}

export default Hero
