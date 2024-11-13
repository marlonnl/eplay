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
            <FooterLink
              title="Clique aqui para acessar jogos de RPG"
              to="/categorias#rpg"
            >
              RPG
            </FooterLink>
          </li>
          <li>
            <FooterLink
              title="Clique aqui para acessar jogos de ação"
              to="/categorias#action"
            >
              Ação
            </FooterLink>
          </li>
          <li>
            <FooterLink
              title="Clique aqui para acessar jogos de esportes"
              to="/categorias#sports"
            >
              Esportes
            </FooterLink>
          </li>
          <li>
            <FooterLink
              title="Clique aqui para acessar jogos de simulação"
              to="/categorias#sim"
            >
              Simulação
            </FooterLink>
          </li>
          <li>
            <FooterLink
              title="Clique aqui para acessar jogos de luta"
              to="/categorias#fight"
            >
              Luta
            </FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Acesso rápido</FooterTitle>
        <FooterLinks>
          <li>
            <FooterLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </FooterLink>
          </li>
          <li>
            <FooterLink
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY: todos os direitos reservados</p>
    </div>
  </FooterContainer>
)

export default Footer
