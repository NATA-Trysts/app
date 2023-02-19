export const convertPokemonListDAOToPokemonListConverter = (model: PokemonListDAO): PokemonListVO => {
  return {
    count: model.count,
    results: model.results,
  }
}
