import React, { useEffect, useState } from "react";

import { SafeAreaView, Text } from "react-native";
import { getPokemon, getPokemons } from "../api/pokemon";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const data = await getPokemons();
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
      console.log(pokemons);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  );
};

export default Pokedex;
