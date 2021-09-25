import * as React from 'react';
// MUI Components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// Homemade
import Title from './Components/Title';
import Navbar from './Components/Navbar';
import SmoothScrollButton from './Components/SmoothScrollButton';
import theme from '../src/theme';
import DownChevron from './Components/DownChevron';

export default function Landing() {
  return (
    <div id="landing">
      <Box sx={{height: '100vh', position: 'relative'}}>
        <Navbar />
        <Container
          maxWidth="sm"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Grid
            container
            spacing={8}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Avatar
                style={{
                  backgroundColor: theme.palette.secondary.main,
                  width: '30vw',
                  height: '30vw',
                }}
                src="https://pbs.twimg.com/profile_images/1348803136740319234/As5ktbgz_400x400.jpg"
              />
            </Grid>
            <Grid item>
              <Title />
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <SmoothScrollButton to="about">
                    <Button>About</Button>
                  </SmoothScrollButton>
                </Grid>
                <Grid item>
                  <SmoothScrollButton to="projects">
                    <Button>Portfolio</Button>
                  </SmoothScrollButton>
                </Grid>
                <Grid item>
                  <SmoothScrollButton to="contact">
                    <Button>Contact</Button>
                  </SmoothScrollButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <DownChevron to="about" />
      </Box>
    </div>
  );
}
