import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/colors'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  padding: 8px 16px;
`

export const ButtonLink = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  padding: 8px 16px;
  text-decoration: none;
`
