import * as React from 'react';
import Section from './Components/Section';
// MUI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//
import ProjectList from './Components/ProjectList';

export default function Projects() {
  return (
    <Section bottomChevron={true}>
      <Grid container direction="column">
        <Grid>
          <Typography variant="h2">PROJECTS</Typography>
        </Grid>
        <Grid>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            est placerat in egestas erat imperdiet
          </Typography>
        </Grid>
        <Grid>
          <ProjectList />
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
