import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

interface TitleProps {
  scale?: number;
}

export default function Title({scale = 1}: TitleProps) {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={10}>
        <Typography
          style={{fontSize: `${22 * scale}vw`}}
          variant="h1"
          component="h1"
        >
          JAYDEN
        </Typography>
        <Typography
          style={{fontSize: `${25 * scale}vw`}}
          variant="h1"
          component="h1"
        >
          EDARA
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography
          style={{fontSize: `${8.7 * scale}vw`, textAlign: 'center'}}
          variant="h2"
        >
          JEBIKOH
        </Typography>
      </Grid>
    </Grid>
  );
}
