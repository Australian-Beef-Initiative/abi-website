import React from 'react';
import {
  Stack,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardMedia,
  Button,
  Chip,
  Box,
  ButtonGroup,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { StaticImage } from 'gatsby-plugin-image';
import { farmCreamFont, farmBrown, farmCream } from '../colours';

const FARMERS = [
  {
    imageSrc: '../images/nguni-cattle.jpeg',
    altText: 'picture of farm',
    name: 'Wolki Farm',
    location: 'Albury Wodonga, NSW',
    website: 'https://www.wolkifarm.com.au/',
    facebook: 'https://www.facebook.com/wolkifarm/',
    instagram: 'https://www.instagram.com/wolkifarm',
  },
  {
    imageSrc: '../images/nguni-cattle.jpeg',
    altText: 'picture of farm',
    name: 'Dan Kelton',
    location: 'Buxton, Victoria',
  },
];

export const FarmersText = () => (
  <Stack direction="column" spacing={5}>
    {FARMERS.map((farmer) => {
      const { imageSrc, altText, name, location, website, facebook, instagram } = farmer;
      return (
        <Card key={name} raised sx={{ maxWidth: '90%' }}>
          <StaticImage
            layout="fullWidth"
            alt={altText}
            src="../images/nguni-cattle.jpeg"
            formats={['auto', 'webp', 'avif']}
          />
          <CardContent>
            <Typography sx={{ marginBottom: 2 }} variant="h5">
              {name}
            </Typography>
            <Chip label={location} />
          </CardContent>
          <CardActions>
            <ButtonGroup>
              <Button
                target="_blank"
                rel="noreferrer"
                href={website || ''}
                startIcon={<OpenInNewIcon />}
              >
                Website
              </Button>
              <Button
                target="_blank"
                rel="noreferrer"
                href={facebook || ''}
                startIcon={<FacebookIcon />}
              >
                Facebook
              </Button>
              <Button
                target="_blank"
                rel="noreferrer"
                href={instagram || ''}
                startIcon={<InstagramIcon />}
              >
                Instagram
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      );
    })}
  </Stack>
);
