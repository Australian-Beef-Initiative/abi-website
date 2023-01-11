import React from 'react'
import {Box, Unstable_Grid2 as Grid, Button, ButtonGroup, Link } from '@mui/material'
import { StaticImage } from "gatsby-plugin-image"
import { BrowserView, MobileView } from 'react-device-detect'

export const Header = ( props: any ) => {
  return (
    <Box sx={{marginBottom: 5}}>
      <BrowserView>
      <Grid container spacing={2}>
          <Grid xs={3}>
            <StaticImage src="../images/abi-logo-h300.png" alt="ABI logo" width={300}/>
          </Grid>
          <Grid xs={9}>
            <div style={{height: '100%', display: 'flex', flexDirection: 'column',  justifyContent: 'center', alignItems: 'flex-end' }}>
              <ButtonGroup variant="text" size="small" color="primary" style={{borderRight: 'none'}}>
                <Button sx={{p: 1,}}>Home</Button>
                <Button sx={{p: 1}}>Events</Button>
                <Button sx={{p: 1}}>Farms</Button>
                <Button sx={{p: 1}}>Media</Button>
                <Button sx={{p: 1}}>Membership</Button>
                <Button sx={{p: 1}}>Get Involved</Button>
                <Button sx={{p: 1}}>Contact Us</Button>
                <Button sx={{p: 1}}>International</Button>
              </ButtonGroup>
            </div>
          </Grid>
          </Grid>
        </BrowserView>

        <MobileView>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <StaticImage src="../images/abi-logo-h300.png" alt="ABI logo" width={300}/>
            </Grid>
            <Grid xs={6}>
              <Button>Mobile View</Button>
            </Grid>
          </Grid>
        </MobileView>
      
    </Box>
  )
}