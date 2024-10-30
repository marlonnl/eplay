import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles/colors'
import { Card } from '../../components/Product/styles'

export const ProductContainer = styled.section<Omit<Props, 'title' | 'games'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.bg === 'black' ? colors.black : colors.grey};

  ${Card} {
    background-color: ${(props) =>
      props.bg === 'grey' ? colors.black : colors.grey};
  }

  p {
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
