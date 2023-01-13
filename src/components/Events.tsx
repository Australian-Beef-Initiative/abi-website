import React from 'react';
import { Box, Container, Grid, Typography, Card as MuiCard, Chip, Button, CardContent, CardActions, Item } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';
import { StaticImage } from 'gatsby-plugin-image';

const Card = () => (
  <MuiCard raised sx={{ maxWidth: '90%', marginBottom: 10 }}>
      <StaticImage
        layout="fullWidth"
        alt="example alt text"
        src="../images/nguni-cattle.jpeg"
        formats={['auto', 'webp', 'avif']}
      />
      <CardContent>
        <Typography sx={{ marginBottom: 2 }} variant="h5">
          Example Event
        </Typography>
        <Chip label="Farm name" />
      </CardContent>
      <CardActions>
          <Button
            target="_blank"
            rel="noreferrer"
            href=""
            startIcon={<OpenInNew />}
          >
            Link to Event
          </Button>
      </CardActions>
    </MuiCard>
)

export const Events = (props: any) => (
    <Box sx={{ paddingBottom: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{marginBottom: 10}}>
          Events
        </Typography>
        <Grid container spacing={1} wrap="wrap">
          <Grid item xs={12} md={6} lg={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Card />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )

;

