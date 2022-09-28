import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '../../../common/Card';
import { selectCharacters, getCharacters } from '../characterSlice';

function CharactersList() {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);
  return (
    <Box sx={{ bgcolor: '#cfe8fc', height: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {characters.map((character) => (
          <Grid key={character.id} item xs={6}>
            <Card
              key={character.id}
              title={character.name}
              image={character.image}
              description={character.species}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CharactersList;
