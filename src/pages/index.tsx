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


const theme = createTheme({
  palette: {
    primary: {
      main: '#00008b',
    },
    secondary: {
      main: '#f7931a',
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
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
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


const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
]

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
