import BASE_URL from './api';

export const pokemonAPI = {
  getPokemon: async () => fetch(`${BASE_URL}/pokemon`).then((res) => res.json()),
  searchPokemonByName: async (name) => fetch(`${BASE_URL}/pokemon/?name=${name}`).then((res) => res.json()),
  getPokemonById: async (id) => fetch(`${BASE_URL}/pokemon/${id}`).then((res) => res.json()),
};

export default pokemonAPI;
