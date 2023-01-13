import * as React from 'react';
import Container from '@mui/material/Container';
import type { PageProps } from 'gatsby';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import { Header, Footer, Events, ThemeProvider } from '../components';

const indexContainerStyle = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const IndexPage: React.FC<PageProps> = () => (
    <ThemeProvider>
      <Container sx={indexContainerStyle} maxWidth="lg">
        <Box>
          <Header />
          <Events />
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );

export default IndexPage;