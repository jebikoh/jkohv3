import * as React from 'react';
// MUI
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//
import DownChevron from './DownChevron';
import UpChevron from './UpChevron';
import theme from '../theme';

interface Props {
  children: React.ReactNode;
  downChevron?: boolean;
  downChevronHref?: string;
  upChevron?: boolean;
  upChevronhref?: string;
}

export default function SectionContainer({
  children,
  downChevron = false,
  upChevron = false,
}: Props) {
  return (
    <Box sx={{height: '100vh', position: 'relative'}}>
      {upChevron && <UpChevron />}
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
      {downChevron && <DownChevron />}
    </Box>
  );
}
