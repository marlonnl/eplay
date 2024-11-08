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
        <ProductList title="Ação" games={actionGames} bg="black" id="action" />
        <ProductList
          title="Esportes"
          games={sportGames}
          bg="grey"
          id="sports"
        />
        <ProductList title="Simulação" games={simGames} bg="black" id="sim" />
        <ProductList title="Luta" games={fightGames} bg="grey" id="fight" />
        <ProductList title="RPG" games={rpgGames} bg="black" id="rpg" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Categories
