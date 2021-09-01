import * as React from 'react';
// MUI Components
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
// Homemade
import Title from '../src/Title';
import theme from '../src/theme';

export default function Index() {
  return (
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
        spacing={5}
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
      {/* </Box> */}
    </Container>
  );
}
