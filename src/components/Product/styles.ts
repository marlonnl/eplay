import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${colors.grey};
  padding: 8px;
  border-radius: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const GameTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin: 16px 0 8px;
`

export const GameDescription = styled.p`
  line-height: 22px;
  font-size: 14px;
  display: block;
  margin-top: 16px;
`
