import React, { useEffect } from 'react';

function Pokemon() {
  useEffect(() => {
    console.log('Pokemon');
  }, []);
  return (
    <div>PokemonPage</div>
  );
}
export default Pokemon;
