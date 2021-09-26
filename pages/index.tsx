import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import Typography from '@mui/material/Typography';

import About from '../src/About';
import Landing from '../src/Landing';
import Projects from '../src/Projects';
import Contact from '../src/Contact';

export default function Index() {
  const mobile = useMediaQuery('(max-width:400px');
  return (
    // {mobile ? }
    <>
      {!mobile && <Typography variant="h1">WIP</Typography>}
      {mobile && <Landing />}
      {mobile && <About />}
      {mobile && <Projects />}
      {mobile && <Contact />}
    </>
  );
}
