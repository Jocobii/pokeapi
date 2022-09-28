import * as React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  const loading = useSelector((state) => state.characters.loading);
  return <Box sx={{ display: 'flex' }}>{loading && <CircularProgress />}</Box>;
}
