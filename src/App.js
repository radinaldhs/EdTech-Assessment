import React, { useEffect, useState } from 'react';
import PokemonThumb from './components/PokemonThumb';
// import OfflineNotice from './components/OfflineNotice';

const App = () => {

   const[allPokemons, setAllPokemons] = useState([])
   const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  getAllPokemons()
 }, [])

  return (
    <div className="app-contaner">
      {/* <OfflineNotice /> */}
      
      <h1>Pokemon List</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map( (pokemonStats, index) => 
            <PokemonThumb
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
              stat={pokemonStats.stats[0].base_stat}
              stat1={pokemonStats.stats[1].base_stat}
              stat2={pokemonStats.stats[2].base_stat}
              stat3={pokemonStats.stats[3].base_stat}
              stat4={pokemonStats.stats[4].base_stat}
              stat5={pokemonStats.stats[5].base_stat}
            />)}
          
        </div>
          <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
      </div>
    </div>
  );
}

export default App;
