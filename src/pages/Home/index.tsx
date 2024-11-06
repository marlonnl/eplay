import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductList from '../../containers/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

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
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductList title="Promoções" games={onSaleGames} bg="grey" />
        <ProductList title="Em breve" games={soonGames} bg="black" />
      </>
    )
  }

  return <h4>Caregando...</h4>
}

export default Home
