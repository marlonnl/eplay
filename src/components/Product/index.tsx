import Tag from '../Tag'

import { Card, GameTitle, GameDescription, Infos } from './styles'

import gameImg from '../../assets/images/diablo.png'

type Props = {
  image: string
  title: string
  category: string
  system: string
  description: string
  infos: string[]
}

const Product = ({
  image,
  title,
  category,
  system,
  description,
  infos
}: Props) => (
  <Card>
    <img src={image} alt={image} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <GameTitle>{title}</GameTitle>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <GameDescription>{description}</GameDescription>
  </Card>
)

export default Product
