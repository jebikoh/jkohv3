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
  id: string;
  downChevron?: boolean;
  downChevronTo?: string;
  upChevron?: boolean;
  upChevronTo?: string;
}

export default function SectionContainer({
  children,
  id,
  downChevron = false,
  downChevronTo = '',
  upChevron = false,
  upChevronTo = '',
}: Props) {
  return (
    <div id={id}>
      <Box
        sx={{
          height: '100vh',
          position: 'relative',
        }}
      >
        {upChevron && <UpChevron to={upChevronTo} />}
        <Container
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            padding: theme.spacing(8),
          }}
          sx={{
            [theme.breakpoints.up('lg')]: {
              width: '50vw',
            },
          }}
        >
          {children}
        </Container>
        {downChevron && <DownChevron to={downChevronTo} />}
      </Box>
    </div>
  );
}
