import Banner from '../../components/Banner'
import ProductList from '../../containers/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductList
        title="Promoções"
        games={onSaleGames}
        bg="grey"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductList
        title="Em breve"
        games={soonGames}
        bg="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
