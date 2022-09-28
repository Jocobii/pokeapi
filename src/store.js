import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './features/characters/characterSlice';

const store = configureStore({
  reducer: {
    characters: characterSlice,
  },
});

export default store;
