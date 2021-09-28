import * as React from 'react';
import Section from './components/Section';
// MUI
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//
import ProjectList from './components/ProjectList';
import Project from './components/Project';
import projects from './../projects.json';

const projectList: {
  [index: string]: Project[];
} = projects;

export default function Projects() {
  return (
    <Section id="projects" downChevron={true} downChevronTo="contact">
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
