import React from 'react'
import {PageProps} from 'gatsby'
import { Divider, Stack, Link, Box, Grid } from '@mui/material';


export const Footer = ( props: any ) => {
  return (
    <Box style={{position: 'sticky', bottom: 0, width: '100%',}}>
      <Grid container spacing={2}>
        <Grid xs={8}>
        <Stack direction="column" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
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
        <Grid xs={4}>
          <h2 style={{textAlign: 'right'}}>Placeholder section</h2>
        </Grid>
      </Grid>
    </Box>
  )
}