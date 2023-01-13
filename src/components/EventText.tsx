import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export const EventText = () => (
  <Box>
    <Typography variant="body1" sx={{ marginBottom: 3 }}>
      ABI members hold Summits, often on farm properties, which are open to our members and the
      wider community. Summits vary in content, and will typically have a number of presentations
      and activities covering:
    </Typography>
    <Container>
      <Typography variant="body1" sx={{ display: 'list-item' }}>
        The importance of eating meat for human health
      </Typography>
      <Typography variant="body1" sx={{ display: 'list-item' }}>
        The benefits to our environment from regenerative agriculture practices
      </Typography>
      <Typography variant="body1" sx={{ display: 'list-item' }}>
        The opportunity for consumers to meet the farmers and their families who grow our food -
        “shake your farmer’s hand”
      </Typography>
      <Typography variant="body1" sx={{ display: 'list-item' }}>
        The opportunity to see the animals in the farm environment
      </Typography>
      <Typography variant="body1" sx={{ display: 'list-item' }}>
        Activities such as BBQs, face painting, live music
      </Typography>
      <Typography variant="body1" sx={{ display: 'list-item' }}>
        The opportunity to purchase farm produce to take home.
      </Typography>
    </Container>
  </Box>
);
