import { HOST } from "../utils/constants";

export const getPokemons = async (limit, page) => {
  limit = limit || 20;
  page = page || 0;
  const offset = page * limit;
  try {
    console.log("getPokemons", limit, offset);
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
