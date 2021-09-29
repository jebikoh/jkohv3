import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

interface TitleProps {
  scale?: number;
}

export default function Title({scale = 1}: TitleProps) {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
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
      <Grid item>
        <Typography
          style={{
            fontSize: `${8.7 * scale}vw`,
            textAlign: 'center',
            lineHeight: `${7.75 * scale}vw}`,
          }}
          variant="subtitle1"
        >
          JEBIKOH
        </Typography>
      </Grid>
    </Grid>
  );
}
