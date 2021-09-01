import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function Title() {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{backgroundColor: 'blue'}}
    >
      <Grid item xs={10}>
        <Typography style={{fontSize: '22vw'}} variant="h1" component="h1">
          JAYDEN
        </Typography>
        <Typography style={{fontSize: '25vw'}} variant="h1" component="h1">
          EDARA
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          style={{fontSize: '8.7vw', textAlign: 'center'}}
          variant="h2"
        >
          JEBIKOH
        </Typography>
      </Grid>
    </Grid>
  );
}
