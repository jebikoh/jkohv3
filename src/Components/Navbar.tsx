import * as React from 'react';
// MUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
// Icons
import Twitter from '@mui/icons-material/Twitter';
import Github from '@mui/icons-material/Github';
interface NavbarProps {
  height?: string;
}

export default function Navbar({height = '5vh'}: NavbarProps) {
  return (
    <AppBar style={{height: height}} position="fixed">
      <Toolbar>
        <Box marginLeft="auto">
          <IconButton aria-label="Twitter" href="https://twitter.com/jebikoh">
            <Twitter />
          </IconButton>
          <IconButton aria-label="Github" href="https://github.com/jebikoh">
            <Github />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
