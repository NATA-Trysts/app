import { convertPokemonListDAOToPokemonListConverter } from '@/converters/convert-pokemon-list-dao-to-pokemon-list.converter'
import { request } from '@/libs/request'

const getPokemons = (): Promise<PokemonListVO> => {
  return request.get(['pokemon']).then(convertPokemonListDAOToPokemonListConverter)
}

export const pokemonService = {
  getPokemons,
}
