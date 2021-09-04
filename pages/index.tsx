import * as React from 'react';
// MUI Components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Chevron from '@mui/icons-material/KeyboardArrowDown';
// Homemade
import Title from '../src/Title';
import Navbar from '../src/Navbar';
import theme from '../src/theme';

export default function Index() {
  return (
    <Box sx={{height: '100vh'}}>
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
                <Button>About</Button>
              </Grid>
              <Grid item>
                <Button>Portfolio</Button>
              </Grid>
              <Grid item>
                <Button>Contact</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container
        style={{position: 'absolute', bottom: '2vh', textAlign: 'center'}}
      >
        <IconButton size="large" aria-label="scroll-down">
          <Chevron fontSize="large" />
        </IconButton>
      </Container>
    </Box>
  );
}
