import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

import ProductList from '../../containers/ProductList'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simGames } = useGetSimGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simGames && fightGames && rpgGames) {
    return (
      <>
        <ProductList title="Ação" games={actionGames} bg="black" />
        <ProductList title="Esportes" games={sportGames} bg="grey" />
        <ProductList title="Simulação" games={simGames} bg="black" />
        <ProductList title="Luta" games={fightGames} bg="grey" />
        <ProductList title="RPG" games={rpgGames} bg="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Categories
