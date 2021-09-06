import * as React from 'react';
import theme from './theme';
import Chevron from './Chevron';
// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface Props {
  children: React.ReactNode;
  bottomChevron?: boolean;
  topChevron?: boolean;
}

export default function SectionContainer({
  children,
  bottomChevron = false,
  topChevron = false,
}: Props) {
  return (
    <Box sx={{height: '100vh', position: 'relative'}}>
      {/* Change to top chevron component when created */}
      {topChevron && <Chevron />}
      <Container
        maxWidth="sm"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          padding: theme.spacing(8),
        }}
      >
        {children}
      </Container>
      {bottomChevron && <Chevron />}
    </Box>
  );
}
