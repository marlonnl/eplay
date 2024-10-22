import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const HeaderBar = styled.header`
  background-color: ${colors.grey};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`

export const CartLink = styled.a`
  display: flex;
  align-items: center;

  img {
    margin-left: 16px;
  }
`
