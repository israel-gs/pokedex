import { POKEMON_TYPE_COLORS } from "./constants";

const getColorFromPokemonType = (type) =>
  POKEMON_TYPE_COLORS[type.toLowerCase()];

export { getColorFromPokemonType };
