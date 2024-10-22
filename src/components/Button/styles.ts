import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/colors'

export const ButtonContainer = styled.button`
  font-weight: bold;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  background-color: transparent;
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
