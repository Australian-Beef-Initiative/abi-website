import React from 'react'
import {PageProps} from 'gatsby'
import { Divider, Stack, Link, Box, Grid, Typography, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


export const Footer = ( props: any ) => {
  return (
    <Box style={{position: 'relative', bottom: 0}}>
      <Grid container >
        <Grid xs={4}>
        <Stack direction="column" spacing={1} divider={<Divider orientation="vertical" flexItem />}>
          <Link href="#" underline="none">
            {'Home'}
          </Link>
          <Link href="#" underline="hover">
            {'Events'}
          </Link>
          <Link href="#" underline="always">
            {'Contact us'}
          </Link>
        </Stack>
        </Grid>
        <Grid xs={4} alignItems="center">
          <IconButton>
            <TwitterIcon/>
          </IconButton>
          <IconButton>
            <FacebookIcon/>
          </IconButton>
        </Grid>
        <Grid xs={4}>
          <Typography align="right" variant="h5">
            Placeholder section
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}