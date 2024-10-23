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
        <Product
          title="Nome"
          image="https://placehold.co/222x250"
          infos={['-10%', 'RS 150']}
          category="Ação"
          system="Windows"
          description="Descrição do jogo"
        />
        <Product
          title="Nome"
          image="https://placehold.co/222x250"
          infos={['-10%', 'RS 150']}
          category="Ação"
          system="Windows"
          description="Descrição do jogo"
        />
        <Product
          title="Nome"
          image="https://placehold.co/222x250"
          infos={['-10%', 'RS 150']}
          category="Ação"
          system="Windows"
          description="Descrição do jogo"
        />
        <Product
          title="Nome"
          image="https://placehold.co/222x250"
          infos={['-10%', 'RS 150']}
          category="Ação"
          system="Windows"
          description="Descrição do jogo"
        />
      </ProductGrid>
    </ProductContainer>
  </div>
)

export default ProductList
