import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles/colors'
import { Card } from '../../components/Product/styles'

export const ProductContainer = styled.section<Omit<Props, 'title'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.bg === 'black' ? colors.black : colors.grey};

  ${Card} {
    background-color: ${(props) =>
      props.bg === 'grey' ? colors.black : colors.grey};
  }
`

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  margin-top: 40px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
