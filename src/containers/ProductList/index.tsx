import Product from '../../components/Product'

import { ProductContainer, ProductGrid, Title } from './styles'

type Props = {
  title: string
  bg: 'grey' | 'black'
}

const ProductList = ({ bg, title }: Props) => (
  <div className="container">
    <ProductContainer>
      <Title>{title}</Title>
      <ProductGrid>
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductGrid>
    </ProductContainer>
  </div>
)

export default ProductList
