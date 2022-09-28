import BASE_URL from './api';

export const characterAPI = {
  getPokemon: async () => fetch(`${BASE_URL}/pokemon`).then((res) => res.json()),
  searchPokemonByName: async (query) => fetch(`${BASE_URL}/pokemon/?name=${query}`).then((res) => res.json()),
};

export default characterAPI;
