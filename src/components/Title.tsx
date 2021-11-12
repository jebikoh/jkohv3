import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function Title() {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h1" component="h1">
          JAYDEN
        </Typography>
        <Typography variant="h2" component="h1">
          EDARA
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">JEBIKOH</Typography>
      </Grid>
    </Grid>
  );
}
