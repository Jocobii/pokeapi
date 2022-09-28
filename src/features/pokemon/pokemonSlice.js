/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { pokemonAPI } from '../../services/charactersAPI';

const initialState = {
  data: null,
  list: [],
  info: {},
  loading: false,
  error: '',
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    loading(state) {
      state.loading = true;
    },
    characterList(state, action) {
      const {
        results, count, next, previous,
      } = action.payload;
      state.list = results;
      state.info = { count, next, previous };
      state.loading = false;
    },
    pokemon(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
  },
});

export const { loading, characterList, pokemon } = pokemonSlice.actions;

export const getCharacters = () => async (dispatch) => {
  dispatch(loading());
  const response = await pokemonAPI.getPokemon();
  dispatch(characterList(response));
};

export const searchPokemonByName = (name) => async (dispatch) => {
  dispatch(loading());
  const response = await pokemonAPI.searchPokemonByName(name);
  if (response.error) return;
  dispatch(characterList(response));
};

export const getPokemonById = (id) => async (dispatch) => {
  dispatch(loading());
  const response = await pokemonAPI.getPokemonById(id);
  if (response.error) return;
  dispatch(pokemon(response));
};

export const selectPokemons = (state) => state.pokemons.list;
export const selectPokemon = (state) => state.pokemons.data;

export default pokemonSlice.reducer;
