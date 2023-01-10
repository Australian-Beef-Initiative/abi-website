import React from 'react'
import {PageProps} from 'gatsby'
import {Box, Button, Grid, Typography, Container, CardActions, CardContent, Card} from '@mui/material'
import { StaticImage } from 'gatsby-plugin-image'
import { farmCream, farmBrown, farmCreamFont } from '../colours'

const BasicCard = () => {
  return (
    <Card sx={{ maxWidth: 275, backgroundColor: farmBrown, marginTop: '25%', opacity: 0.88 }}>
      <CardContent>
        <Typography variant="h5" component="div" color={farmCreamFont}>
        Welcome to the Australian Beef Initiative
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" variant="contained" color="primary">View Events</Button>
      </CardActions>
    </Card>
  );
}

export const Main = ( props: any ) => {
  return (
    <Box sx={{paddingBottom: 10}}>
      <div style={{ display: "grid" }}>
        <StaticImage
          style={{
            gridArea: "1/1",
            minHeight: 400,
            borderRadius: 10
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          // aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt="Nguni Cows, looking at camera"
          src={
            "../images/nguni-cattle.jpeg"
          }
          formats={["auto", "webp", "avif"]}
        />
        <Container
          style={{
            gridArea: "1/1",
            position: "relative",

          }}
          maxWidth="md"
        >
          <BasicCard/>
        </Container>
      </div>
    </Box>
  )
}
