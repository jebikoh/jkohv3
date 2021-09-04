import * as React from 'react';
// MUI Components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Chevron from '@mui/icons-material/KeyboardArrowDown';
// Homemade
import Title from '../src/Title';
import Navbar from '../src/Navbar';
import theme from '../src/theme';

export default function Index() {
  return (
    <Box sx={{height: '100vh'}}>
      <Navbar />
      <Chevron />
      <Container
        maxWidth="sm"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* <Box sx={{my: 4}}> */}
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
            >
              J
            </Avatar>
          </Grid>
          <Grid item>
            <Title />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
