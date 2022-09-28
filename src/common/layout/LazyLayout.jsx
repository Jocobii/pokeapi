import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import Pokemon from '../../features/pokemon/pages/Pokemon';
import Pokedex from '../../features/pokemon/pages/Pokedex';

function LazyLayout() {
  return (
    <div>
      <h1>Lazy Layout</h1>
      <Routes>
        <Route path="/" element={<Pokemon />} />
        <Route path="/:id" element={<Pokedex />} />
      </Routes>
    </div>
  );
}
export default LazyLayout;
