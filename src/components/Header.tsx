import React from 'react'
import {PageProps} from 'gatsby'
import {Box, Unstable_Grid2 as Grid, Button, ButtonGroup, Link } from '@mui/material'
import { StaticImage } from "gatsby-plugin-image"

export const Header = ( props: any ) => {
  return (
    <Box >
      <Grid container spacing={2}>
        <Grid xs={3}>
          <StaticImage src="../images/abi-logo-300px.png" alt="ABI logo" width={300}/>
        </Grid>
        <Grid xs={9}>
          <div style={{height: '100%', display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'flex-end' }}>
            <ButtonGroup variant="text" size="small" color="secondary">
              <Button sx={{p: 2}}>Home</Button>
              <Button sx={{p: 2}}>Events</Button>
              <Button sx={{p: 2}}>Farms</Button>
              <Button sx={{p: 2}}>Media</Button>
              <Button sx={{p: 2}}>Membership</Button>
              <Button sx={{p: 2}}>Get Involved</Button>
              <Button sx={{p: 2}}>Contact Us</Button>
              <Button sx={{p: 2}}>International</Button>
            </ButtonGroup>

          </div>
        </Grid>
      </Grid>
    </Box>
  )
}