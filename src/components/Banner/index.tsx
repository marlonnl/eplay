import { useEffect, useState } from 'react'

import Button from '../Button'
import Tag from '../Tag'

import { Game } from '../../pages/Home'
import { priceFormat } from '../../containers/ProductList'

import { ImageContainer, Price, Title } from './styles'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((r) => r.json())
      .then((r) => setGame(r))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <ImageContainer style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Price>
            De <span>{priceFormat(game.prices.old)}</span> <br />
            por apenas {priceFormat(game.prices.current)}
          </Price>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </ImageContainer>
  )
}

export default Banner
