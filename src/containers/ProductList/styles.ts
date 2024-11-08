import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles/colors'
import { Card } from '../../components/Product/styles'
import { breakpoints } from '../../styles'

export const ProductContainer = styled.section<Omit<Props, 'title' | 'games'>>`
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
  gap: 24px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
