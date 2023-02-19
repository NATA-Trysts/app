import { useEffect, useState } from 'react'

import { pokemonService } from '@/services/pokemon.service'

// This component is used for testing api calling, please don't use any
export const Pokemon = () => {
  const [pokemons, setPokemons] = useState<any[]>([])

  useEffect(() => {
    async function fetchPokemons() {
      const pokemons = await pokemonService.getPokemons()

      return pokemons
    }

    fetchPokemons().then((data) => {
      setPokemons(data.results)
    })
  }, [])

  return (
    <>
      <span>There are {pokemons.length} pokemons</span>
    </>
  )
}
