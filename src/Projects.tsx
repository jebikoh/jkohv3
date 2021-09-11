import * as React from 'react';
import Section from './Components/Section';
// MUI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//
import ProjectList from './Components/ProjectList';
import Project from './Components/Project';
import projects from './../projects.json';

const projectList: {
  [index: string]: Project[];
} = projects;

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
          <ProjectList
            header="PROFESSIONAL"
            projects={projectList['primary']}
          />
        </Grid>
        <Grid>
          <ProjectList
            header="RECREATIONAL"
            projects={projectList['recreational']}
          />
        </Grid>
        <Grid>
          <ProjectList header="PESRONAL" projects={projectList['personal']} />
        </Grid>
      </Grid>
    </Section>
  );
}
