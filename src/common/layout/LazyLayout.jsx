import React from 'react';
import {
  NavLink, Routes, Route, Navigate,
} from 'react-router-dom';
import Pokemon from '../../features/characters/pages/Pokemon';

function LazyLayout() {
  return (
    <div>
      <h1>Lazy Layout</h1>
      <ul>
        <li>
          <NavLink to="pokemon">Pokemon</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="/*" element={<Navigate replace to="/pokemon" />} />
      </Routes>
    </div>
  );
}
export default LazyLayout;
