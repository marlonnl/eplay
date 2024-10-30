import { ProductContainer, Title } from './styles'

export type Props = {
  title: string
  bg: 'black' | 'grey'
  children: JSX.Element
}

const Section = ({ title, bg, children }: Props) => (
  <ProductContainer bg={bg}>
    <div className="container">
      <Title>{title}</Title>
      {children}
    </div>
  </ProductContainer>
)

export default Section
