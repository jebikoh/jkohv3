import * as React from 'react';
import Section from './Section';
// MUI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Projects() {
  return (
    <Section bottomChevron={true}>
      <Grid container direction="column">
        <Grid>
          <Typography variant="h2">PROEJCTS</Typography>
        </Grid>
        <Grid>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            est placerat in egestas erat imperdiet
          </Typography>
        </Grid>
        <Grid>
          <Button>PROFESSIONAL</Button>
        </Grid>
        <Grid>
          <Button>RECREATIONAL</Button>
        </Grid>
        <Grid>
          <Button>PERSONAL</Button>
        </Grid>
      </Grid>
    </Section>
  );
}
