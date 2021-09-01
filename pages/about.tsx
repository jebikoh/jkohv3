import * as React from 'react';
//Material UI
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
// Components
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{my: 4}}>
        <Grid container spacing={3}>
          <Grid item xs={10}>
            <Typography variant="h1" component="h1">
              JAYDEN
            </Typography>
            <Typography
              style={{fontSize: '6.75em'}}
              variant="h1"
              component="h1"
            >
              EDARA
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography style={{textAlign: 'center'}} variant="h2">
              JEBIKOH
            </Typography>
          </Grid>
        </Grid>
        <Button color="secondary" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <ButtonGroup color="secondary" variant="text">
          <Button>About</Button>
          <Button>Projects</Button>
          <Button>Contact</Button>
        </ButtonGroup>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
