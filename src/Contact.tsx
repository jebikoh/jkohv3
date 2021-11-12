import * as React from 'react';
// MUI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// Homemade
import theme from './theme';
import Section from './components/Section';

export default function Contact() {
  return (
    <Section id="contact" upChevron={true} upChevronTo="landing">
      <Grid container alignItems="center" spacing={1}>
        <Grid>
          <Typography variant="h4">CONTACT</Typography>
        </Grid>
        <Grid>
          <Typography style={{marginBottom: theme.spacing(4)}} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            est placerat in egestas erat imperdiet sed euismod. Id ornare arcu
            odio ut sem.
          </Typography>
          <Grid container direction="row">
            <Typography variant="h5">EMAIL:</Typography>
          </Grid>
          <Grid>
            <Link href="mailto: aedara@cs.washington.edu">
              aedara@cs.washington.edu
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}
