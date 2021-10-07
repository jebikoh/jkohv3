import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import Typography from '@mui/material/Typography';

import About from '../src/About';
import Landing from '../src/Landing';
import Projects from '../src/Projects';
import Contact from '../src/Contact';
import Section from '../src/components/Section';

export default function Index() {
  const mobile = useMediaQuery('(max-width:430px');
  return (
    // {mobile ? }
    <>
      {!mobile && (
        <Section id="WIP">
          <Typography sx={{fontSize: '15vw', textAlign: 'center'}} variant="h1">
            WIP
          </Typography>
          <Typography
            sx={{fontSize: '0.25em', lineHeight: '2vh', textAlign: 'center'}}
            variant="body1"
          >
            Currently only works on displays {'<'} 414px.
          </Typography>
          <Typography
            sx={{fontSize: '0.15em', lineHeight: '2vh', textAlign: 'center'}}
            variant="body1"
          >
            Yes, this is ugly but its only temporary {'>:(('}
          </Typography>
        </Section>
      )}
      {mobile && <Landing />}
      {mobile && <About />}
      {mobile && <Projects />}
      {mobile && <Contact />}
    </>
  );
}
