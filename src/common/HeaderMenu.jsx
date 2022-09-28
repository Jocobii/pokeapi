import * as React from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { searchCharactersByName } from '../features/characters/characterSlice';

export default function HeaderMenu() {
  const dispatch = useDispatch();
  const handleChange = (value) => {
    console.log(value);
    dispatch(searchCharactersByName(value));
  };

  return (
    <Box sx={{ width: '100%', marginBottom: '3rem' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} md={8}>
          <TextField
            onChange={(e) => handleChange(e.target.value)}
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
