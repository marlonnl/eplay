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
  id: number
}

const Product = ({
  image,
  title,
  category,
  system,
  description,
  infos,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92) + '...'
    }
    return description
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={image} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <GameTitle>{title}</GameTitle>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <GameDescription>{getDescription(description)}</GameDescription>
    </Card>
  )
}

export default Product
