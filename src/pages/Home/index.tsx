import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductList from '../../containers/ProductList'

import residentImg from '../../assets/images/resident.png'
import fifaImg from '../../assets/images/fifa.png'
import diabloImg from '../../assets/images/diablo.png'
import starWarsImg from '../../assets/images/star_wars.png'
import streetImg from '../../assets/images/street.png'
import zeldaImg from '../../assets/images/zelda.png'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

// https://fake-api-tau.vercel.app/api/eplay/esportes
export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const [sales, setSales] = useState<Game[]>([])
  const [comingSoon, setComingSoon] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
      .then((r) => r.json())
      .then((r) => setSales(r))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
      .then((r) => r.json())
      .then((r) => setComingSoon(r))
  }, [])

  return (
    <>
      <Banner />
      <ProductList title="Promoções" games={sales} bg="grey" />
      <ProductList title="Em breve" games={comingSoon} bg="black" />
    </>
  )
}

export default Home
