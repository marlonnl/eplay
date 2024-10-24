import Banner from '../../components/Banner'
import ProductList from '../../containers/ProductList'
import Game from '../../models/Game'

import residentImg from '../../assets/images/resident.png'
import fifaImg from '../../assets/images/fifa.png'
import diabloImg from '../../assets/images/diablo.png'
import starWarsImg from '../../assets/images/star_wars.png'
import streetImg from '../../assets/images/street.png'
import zeldaImg from '../../assets/images/zelda.png'

const sales: Game[] = [
  {
    id: 1,
    title: 'Resident Evil 4 - Remake',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    category: 'Acão',
    image: residentImg,
    infos: ['10%', 'R$ 199,90'],
    system: 'Windows'
  },
  {
    id: 2,
    title: 'Resident Evil 4 - Remake',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    category: 'Acão',
    image: residentImg,
    infos: ['10%', 'R$ 199,90'],
    system: 'Windows'
  },
  {
    id: 3,
    title: 'FIFA 23',
    description:
      'EA SPORTS FIFA 23 traz o jogo de todo mundo aos gramados com a tecnologia HyperMotion2...',
    category: 'Esporte',
    image: fifaImg,
    infos: ['50%', 'R$ 99,90'],
    system: 'PS5'
  },
  {
    id: 4,
    title: 'FIFA 23',
    description:
      'EA SPORTS FIFA 23 traz o jogo de todo mundo aos gramados com a tecnologia HyperMotion2...',
    category: 'Esporte',
    image: fifaImg,
    infos: ['50%', 'R$ 99,90'],
    system: 'PS5'
  }
]

const comingSoon: Game[] = [
  {
    id: 5,
    title: 'Diablo 4',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    category: 'RPG',
    image: diabloImg,
    infos: ['05/04'],
    system: 'Windows'
  },
  {
    id: 6,
    title: 'Star Wars Jedi Survivor',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    category: 'Aventura',
    image: starWarsImg,
    infos: ['05/04'],
    system: 'Windows'
  },
  {
    id: 7,
    title: 'Street Fighter 6',
    description:
      'Street Fighter 6 será lançado em breve. É um jogo desenvolvido pela Capcom.',
    category: 'Luta',
    image: streetImg,
    infos: ['05/04'],
    system: 'Windows'
  },
  {
    id: 8,
    title: 'The Legend of Zelda - TOK',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda...',
    category: 'RPGG',
    image: zeldaImg,
    infos: ['05/04'],
    system: 'Switch'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList title="Promoções" games={sales} bg="grey" />
    <ProductList title="Em breve" games={comingSoon} bg="black" />
  </>
)

export default Home
