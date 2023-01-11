import * as React from 'react'
import {Main, Header, Footer, Home } from '../components'
import Container from '@mui/material/Container'
import type { HeadFC, PageProps } from 'gatsby'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/system'
import { createTheme } from '@mui/material';
import {ThemeProvider} from '@mui/material';
import { farmCreamFont, darkGraniteGrey } from '../colours';


const theme = createTheme({
  palette: {
    primary: {
      main: darkGraniteGrey,
    },
    secondary: {
      main: farmCreamFont,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          body1: 'p',
          body2: 'span',
        },
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
});

const IndexPage: React.FC<PageProps> = () => {
  return (

    <ThemeProvider theme={theme}>
      <Container 
        sx={{display: 'flex', minHeight: '100vh', flexDirection: 'column', justifyContent: 'space-between'}} 
        maxWidth="lg"
      >
        <Box>
          <Header/>
          <Main >
            <Home/>
          </Main>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>

  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
