import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  useMediaQuery,
  Box,
} from '@mui/material';
import { farmCreamFont, farmBrown } from '../colours';

const BasicCard = (props: { cardHeading: string; cardButtonLabel: string }) => {
  const { cardHeading, cardButtonLabel } = props;
  return (
    <Card sx={{ maxWidth: 275, backgroundColor: farmBrown, marginTop: '25%', opacity: 0.88 }}>
      <CardContent>
        <Typography variant="h5" component="div" color={farmCreamFont}>
          {cardHeading}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href="/events" size="large" variant="contained" color="primary">
          {cardButtonLabel}
        </Button>
      </CardActions>
    </Card>
  );
};

export const HomeBanner = (props: {
  imageAlt: string;
  cardHeading: string;
  cardButtonLabel: string;
}) => {
  const { imageAlt, cardHeading, cardButtonLabel } = props;
  const isTabletOrMobile = useMediaQuery('(max-width:1000px)');
  if (isTabletOrMobile) {
    return (
      <Container
        maxWidth="sm"
        sx={{ marginBottom: 10, boxShadow: '10px 10px 20px black' }}
        style={{ display: 'grid', borderRadius: 10, padding: 0, gridTemplateRows: '0.6fr 0.5fr' }}
      >
        <StaticImage
          layout="fullWidth"
          alt={imageAlt}
          src="../images/nguni-cattle.jpeg"
          formats={['auto', 'webp', 'avif']}
        />
        <Container
          maxWidth="md"
          sx={{ backgroundColor: farmBrown, opacity: 0.8, textAlign: 'center' }}
        >
          <Typography sx={{ marginTop: 5 }} variant="h5" color="secondary" align="center">
            Welcome to the Australian Beef Initiative
          </Typography>
          <Button
            sx={{ marginTop: 5, marginBottom: 5 }}
            size="large"
            variant="contained"
            color="primary"
          >
            {cardButtonLabel}
          </Button>
        </Container>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="md"
      sx={{ marginBottom: 10, boxShadow: '10px 10px 20px black', backgroundColor: 'green' }}
      style={{ display: 'grid', borderRadius: 10, padding: 0 }}
    >
      <StaticImage
        style={{
          gridArea: '1/1',
          borderRadius: 10,
        }}
        // layout="fullWidth"
        alt={imageAlt}
        src="../images/nguni-cattle.jpeg"
        formats={['auto', 'webp', 'avif']}
      />
      <Container
        style={{
          gridArea: '1/1',
          position: 'relative',
        }}
        maxWidth="md"
      >
        <BasicCard cardHeading={cardHeading} cardButtonLabel={cardButtonLabel} />
      </Container>
    </Container>
  );
};
