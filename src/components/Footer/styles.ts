import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const FooterContainer = styled.footer`
  background-color: ${colors.grey};
  padding: 32px 0;
  font-size: 14px;
  margin-top: 40px;
`

export const FooterTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
`

export const FooterLinks = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const FooterLink = styled(HashLink)`
  color: ${colors.greyAlt};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`
