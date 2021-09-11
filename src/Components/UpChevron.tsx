import * as React from 'react';
// MUI
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ChevronIcon from '@mui/icons-material/KeyboardArrowUp';

export default function UpChevron() {
  return (
    <Container style={{position: 'absolute', top: '3vh', textAlign: 'center'}}>
      <IconButton size="large" aria-label="scroll-down">
        <ChevronIcon fontSize="large" />
      </IconButton>
    </Container>
  );
}
