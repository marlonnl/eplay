import {
  FooterContainer,
  FooterLink,
  FooterLinks,
  FooterSection,
  FooterTitle
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterSection>
        <FooterTitle>Categorias</FooterTitle>
        <FooterLinks>
          <li>
            <FooterLink>RPG</FooterLink>
          </li>
          <li>
            <FooterLink>Ação</FooterLink>
          </li>
          <li>
            <FooterLink>Aventura</FooterLink>
          </li>
          <li>
            <FooterLink>Esportes</FooterLink>
          </li>
          <li>
            <FooterLink>Simulação</FooterLink>
          </li>
          <li>
            <FooterLink>Estratégia</FooterLink>
          </li>
          <li>
            <FooterLink>FPS</FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Acesso rápido</FooterTitle>
        <FooterLinks>
          <li>
            <FooterLink>Novidades</FooterLink>
          </li>
          <li>
            <FooterLink>Promoções</FooterLink>
          </li>
          <li>
            <FooterLink>Em breve</FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY: todos os direitos reservados</p>
    </div>
  </FooterContainer>
)

export default Footer
