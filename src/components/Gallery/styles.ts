import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Items = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`

export const Item = styled.li`
  position: relative;
  cursor: zoom-in;

  > img {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    height: 150px;
    width: 150px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.2s ease-in-out;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;

  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    img {
      height: 16px;
      width: 16px;
      cursor: pointer;
    }
  }

  > img,
  iframe {
    display: block;
    max-width: 100%;
    width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
    border: none;
  }
`
