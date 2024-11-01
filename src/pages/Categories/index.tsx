import { useEffect, useState } from 'react'

import { Game } from '../Home'
import ProductList from '../../containers/ProductList'

import residentImg from '../../assets/images/resident.png'
import fifaImg from '../../assets/images/fifa.png'
import diabloImg from '../../assets/images/diablo.png'
import starWarsImg from '../../assets/images/star_wars.png'
import streetImg from '../../assets/images/street.png'
import zeldaImg from '../../assets/images/zelda.png'

const sales: Game[] = []

const comingSoon: Game[] = []

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSim, setGamesSim] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((r) => r.json())
      .then((r) => setGamesAcao(r))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((r) => r.json())
      .then((r) => setGamesEsportes(r))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((r) => r.json())
      .then((r) => setGamesSim(r))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((r) => r.json())
      .then((r) => setGamesLuta(r))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((r) => r.json())
      .then((r) => setGamesRpg(r))
  }, [])

  return (
    <>
      <ProductList title="Ação" games={gamesAcao} bg="black" />
      <ProductList title="Esportes" games={gamesEsportes} bg="grey" />
      <ProductList title="Simulação" games={gamesSim} bg="black" />
      <ProductList title="Luta" games={gamesLuta} bg="grey" />
      <ProductList title="RPG" games={gamesRpg} bg="black" />
    </>
  )
}
export default Categories
