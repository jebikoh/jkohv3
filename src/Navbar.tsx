import * as React from 'react';
// MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
// Icons
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/Github';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//   })
// );

export default function Navbar() {
  // const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton aria-label="Twitter">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="Github">
          <GithubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
