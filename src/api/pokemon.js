import { HOST } from "../utils/constants";

export const getPokemons = async (limit, offset) => {
  limit = limit || 20;
  offset = offset || 0;
  try {
    const response = await fetch(
      `${HOST}/pokemon?limit=${limit}&offset=${offset}`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getPokemon = async (name) => {
  try {
    const response = await fetch(`${HOST}/pokemon/${name}`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
