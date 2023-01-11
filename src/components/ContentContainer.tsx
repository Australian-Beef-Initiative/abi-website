import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Container, Card, CardContent, Typography, CardActions, Button } from '@mui/material'
import { farmCreamFont, farmBrown } from '../colours'



const BasicCard = (props: {cardHeading: string, cardButtonLabel: string}) => {
  const { cardHeading, cardButtonLabel } =props
    return (
      <Card sx={{ maxWidth: 275, backgroundColor: farmBrown, marginTop: '25%', opacity: 0.88 }}>
        <CardContent>
          <Typography variant="h5" component="div" color={farmCreamFont}>
          {cardHeading}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" variant="contained" color="primary">{cardButtonLabel}</Button>
        </CardActions>
      </Card>
    );
  }

export const ContentContainer = (props: {imageAlt: string, cardHeading: string, cardButtonLabel: string}) => {
  const {imageAlt, cardHeading, cardButtonLabel} = props
    return (
        <Container maxWidth="md" sx={{marginBottom: 10, boxShadow: '10px 10px 20px black', backgroundColor: 'green' }} style={{ display: "grid", borderRadius: 10, padding: 0 }}>
        <StaticImage
          style={{
            gridArea: "1/1",
            borderRadius: 10
          }}
          // layout="fullWidth"
          alt={imageAlt}
          src="../images/nguni-cattle.jpeg"
          formats={["auto", "webp", "avif"]}
        />
        <Container
          style={{
            gridArea: "1/1",
            position: "relative",

          }}
          maxWidth="md"
        >
          <BasicCard cardHeading={cardHeading} cardButtonLabel={cardButtonLabel}/>
        </Container>
      </Container>
    )
}