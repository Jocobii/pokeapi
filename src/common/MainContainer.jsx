import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HeaderMenu from './HeaderMenu';
import Loading from './Loading';

export default function MainContainer({ children }) {
  return (
    <>
      <HeaderMenu />
      <CssBaseline />
      <Loading />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
