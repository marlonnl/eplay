import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../containers/Section'
import Gallery from '../../components/Gallery'

import reImg from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title={'Sobre o jogo'} bg={'black'}>
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantásticos, personalize seu personagem e crie
          poções, domine o lançamento de feitoços, aprimore talentos e torne-se
          o bruxo que deseja ser. Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com chave de um antigo segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que você faz dele.
          Viva o inesperado.
        </p>
      </Section>
      <Section title={'Mais detalhes'} bg={'grey'}>
        <p>
          <b>Plataforma:</b> PlayStation 5<br />
          <b>Desenvolvedor:</b> Avalanche Software
          <br />
          <b>Edotira:</b> Portkey Games, subsidiária da Warner Bros. Interactive
          Entertainment
          <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
          As opções de áudio e legenda podem ser ajustadas nas configurações do
          jogo
        </p>
      </Section>
      <Gallery name={'Jogo teste'} defaultCover={reImg} />
    </>
  )
}

export default Product
