import Button from '../Button'
import Tag from '../Tag'
import { ImageContainer, Price, Title } from './styles'

const Banner = () => (
  <ImageContainer>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4& PS5</Title>
        <Price>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Price>
      </div>
      <Button
        type="link"
        to="/"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div>
  </ImageContainer>
)

export default Banner
