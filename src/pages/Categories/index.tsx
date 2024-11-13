import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

import ProductList from '../../containers/ProductList'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()
  const { data: simGames, isLoading: isLoadingSim } = useGetSimGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()

  return (
    <>
      <ProductList
        isLoading={isLoadingAction}
        title="Ação"
        games={actionGames}
        bg="black"
        id="action"
      />
      <ProductList
        isLoading={isLoadingSport}
        title="Esportes"
        games={sportGames}
        bg="grey"
        id="sports"
      />
      <ProductList
        isLoading={isLoadingSim}
        title="Simulação"
        games={simGames}
        bg="black"
        id="sim"
      />
      <ProductList
        isLoading={isLoadingFight}
        title="Luta"
        games={fightGames}
        bg="grey"
        id="fight"
      />
      <ProductList
        isLoading={isLoadingRpg}
        title="RPG"
        games={rpgGames}
        bg="black"
        id="rpg"
      />
    </>
  )
}
export default Categories
