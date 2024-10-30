import { Banner, GameInfo } from './styles'
import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => (
  <Banner>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <GameInfo>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>de R$ 250,00</span>
          por R$ 190,00
        </p>
        <Button
          variant="primary"
          type="button"
          title="Clique aqui para adicionar ao carinho"
        >
          Adicionar ao carrinho
        </Button>
      </GameInfo>
    </div>
  </Banner>
)

export default Hero
