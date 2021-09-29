import * as React from 'react';
// MUI
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ChevronIcon from '@mui/icons-material/KeyboardArrowUp';
import SmoothScrollButton from './SmoothScrollButton';

interface Props {
  to: string;
}

export default function UpChevron({to}: Props) {
  return (
    <Container
      style={{position: 'absolute', top: '5.7vh', textAlign: 'center'}}
    >
      <SmoothScrollButton to={to}>
        <IconButton size="large" aria-label="scroll-down">
          <ChevronIcon fontSize="large" />
        </IconButton>
      </SmoothScrollButton>
    </Container>
  );
}
