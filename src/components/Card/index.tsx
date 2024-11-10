import { Container } from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ title, children }: Props) => (
  <Container>
    <h2>{title}</h2>
    {children}
  </Container>
)

export default Card
