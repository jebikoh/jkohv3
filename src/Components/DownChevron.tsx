import * as React from 'react';
// MUI
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ChevronIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Chevron() {
  return (
    <Container
      style={{position: 'absolute', bottom: '2vh', textAlign: 'center'}}
    >
      <IconButton size="large" aria-label="scroll-down">
        <ChevronIcon fontSize="large" />
      </IconButton>
    </Container>
  );
}
