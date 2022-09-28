import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Loading from './Loading';

export default function MainContainer({ children }) {
  return (
    <>
      <Loading />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
