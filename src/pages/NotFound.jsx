import React from 'react';
import {
  Container,
  Stack,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import notFoundImages from '../assets/notFound.jpeg';

function NotFound() {
  const navigate = useNavigate();
  return (
    <Container sx={{ color: 'text.primary' }}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Stack>
          <img
            src={notFoundImages}
            alt="not-found-img"
            style={{ width: 400, height: 400 }}
          />
        </Stack>
        <h1>
          Error 404 Not Found
        </h1>
        <Button
          onClick={() => navigate('/pokemon')}
        >
          Go Back
        </Button>
      </Stack>
    </Container>
  );
}
export default NotFound;
