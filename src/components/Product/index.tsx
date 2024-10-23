import Tag from '../Tag'

import { Card, GameTitle, GameDescription } from './styles'

import gameImg from '../../assets/images/diablo.png'

const Product = () => (
  <Card>
    <img src={gameImg} />
    <GameTitle>Nome do jogo</GameTitle>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <GameDescription>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vero omnis
      soluta quo, similique odio pariatur maiores modi esse ad ut laudantium,
      assumenda libero, suscipit amet alias voluptatem consequatur magni!
    </GameDescription>
  </Card>
)

export default Product
