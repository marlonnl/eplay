import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import closeImg from '../../assets/images/close.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${colors.grey};
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .emptyCart {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`

export const Prices = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 24px;

  span {
    font-size: 12px;
    color: ${colors.greyAlt};
    display: block;
  }
`

export const Quantity = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  margin: 32px 0 16px;
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  column-gap: 24px;
  border-bottom: 1px solid ${colors.greyAlt};
  padding: 8px 0;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    color: ${colors.white};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-color: transparent;
    background-image: url(${closeImg});
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    top: 8;
    right: 0;
  }
`
