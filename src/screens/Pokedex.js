import React, { useEffect, useState } from "react";

import { SafeAreaView } from "react-native";
import { getPokemon, getPokemons } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async (page) => {
    page = page || 0;
    try {
      const data = await getPokemons(20, page);
      const dataArray = [];
      for await (const pokemon of data.results) {
        const pokemonData = await getPokemon(pokemon.name);
        dataArray.push({
          id: pokemonData.id,
          name: pokemonData.name,
          type: pokemonData.types[0].type.name,
          order: pokemonData.order,
          image: pokemonData.sprites.other["official-artwork"].front_default,
        });
      }
      setPokemons([...pokemons, ...dataArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={(page) => {
          loadPokemons(page);
        }}
      />
    </SafeAreaView>
  );
};

export default Pokedex;
