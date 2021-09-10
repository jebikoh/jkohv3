import * as React from 'react';
// MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// Homemade
import Chevron from './Components/Chevron';
import theme from './theme';
import Section from './Components/Section';

export default function About() {
  return (
    <Section bottomChevron={true}>
      <Grid container>
        <Grid>
          <Typography variant="h2">ABOUT ME</Typography>
        </Grid>
        <Grid>
          <Typography style={{marginBottom: theme.spacing(4)}} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            est placerat in egestas erat imperdiet sed euismod. Id ornare arcu
            odio ut sem. Facilisi morbi tempus iaculis urna id volutpat.
            Scelerisque purus semper eget duis at tellus at. Sit amet mattis
            vulputate enim nulla.
          </Typography>
          <Typography variant="body1">
            Sit amet venenatis urna cursus eget nunc. Felis donec et odio
            pellentesque diam volutpat commodo. Euismod lacinia at quis risus.
            Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Et
            odio pellentesque diam volutpat commodo sed egestas. Nunc vel risus
            commodo viverra maecenas. Sodales ut etiam sit amet nisl purus.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  );
}
