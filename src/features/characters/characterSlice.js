/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { characterAPI } from '../../services/charactersAPI';

const initialState = {
  data: [],
  list: [],
  info: {},
  loading: false,
  error: '',
};

export const chareactersSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    loading(state) {
      state.loading = true;
    },
    characterList(state, action) {
      state.list = action.payload.results;
      state.info = action.payload.info;
      state.loading = false;
    },
  },
});

export const { loading, characterList } = chareactersSlice.actions;

export const getCharacters = () => async (dispatch) => {
  dispatch(loading());
  const response = await characterAPI.getPokemon();
  dispatch(characterList(response));
};

export const searchCharactersByName = (name) => async (dispatch) => {
  dispatch(loading());
  const response = await characterAPI.searchPokemonByName(name);
  console.log(response);
  if (response.error) return;
  dispatch(characterList(response));
};

export const selectCharacters = (state) => state.characters.list;

export default chareactersSlice.reducer;
