import React from 'react'
import {PageProps} from 'gatsby'
import { Divider, Stack, Link, Box, Grid, Typography, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


export const Footer = ( props: any ) => {
  return (
    <Box style={{position: 'relative', bottom: 0, paddingBottom: 4}}>
      <Grid container >
        <Grid xs={4}>
        <Stack direction="column" spacing={1} divider={<Divider orientation="vertical" flexItem />}>
          <Link href="#" underline="hover">
            {'Home'}
          </Link>
          <Link href="#" underline="hover">
            {'Events'}
          </Link>
          <Link href="#" underline="hover">
            {'Contact us'}
          </Link>
        </Stack>
        </Grid>
        <Grid xs={4}>
          <Box
            display="flex"
            justifyContent="center"
          >
            <IconButton href="https://twitter.com/BeefInAustralia" target="_blank">
              <TwitterIcon/>
            </IconButton>
            <IconButton>
              <FacebookIcon/>
            </IconButton>
          </Box>
        </Grid>
        <Grid xs={4}> 
        <Box
          display="flex"
          flexDirection="column"
          sx={{height: '100%'}}
          justifyContent="end"
        >
          <Typography align="right" variant="body2">
            &copy; Copyright 2023 Australian Beef Initiative Limited
          </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}