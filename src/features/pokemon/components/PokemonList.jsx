import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '../../../common/Card';
import { selectPokemons, getCharacters } from '../pokemonSlice';

function PokemonList() {
  const dispatch = useDispatch();
  const pokemons = useSelector(selectPokemons);
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);
  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {pokemons.map((pokemon) => (
          <Grid key={`card-${pokemon.name}`} item xs={2}>
            <Card
              key={`card-${pokemon.name}`}
              name={pokemon.name}
              url={pokemon.url}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PokemonList;
