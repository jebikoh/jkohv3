import * as React from 'react';
// MUI
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ChevronIcon from '@mui/icons-material/KeyboardArrowDown';
//
import SmoothScrollButton from './SmoothScrollButton';

interface Props {
  to: string;
}

export default function DownChevron({to}: Props) {
  return (
    <Container
      style={{
        position: 'absolute',
        bottom: '2vh',
        textAlign: 'center',
        width: '100vw',
      }}
    >
      <SmoothScrollButton to={to}>
        <IconButton size="large" aria-label="scroll-down">
          <ChevronIcon fontSize="large" />
        </IconButton>
      </SmoothScrollButton>
    </Container>
  );
}
