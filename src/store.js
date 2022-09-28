import { configureStore } from '@reduxjs/toolkit';
import pokemonsSlice from './features/pokemon/pokemonSlice';

const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice,
  },
});

export default store;
