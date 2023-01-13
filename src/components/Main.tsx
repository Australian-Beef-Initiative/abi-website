import React from 'react'
import { graphql } from 'gatsby';
import {Box, Container} from '@mui/material'
import {HomeBanner} from './HomeBanner'
import {HomeContentContainer} from './HomeContentContainer'
import { EventText } from './EventText'
import { ObjectivesText } from './ObjectivesText'
import { FarmersText } from './FarmersText'
import 'bootstrap/dist/css/bootstrap.min.css';



export const Main = ( props: any ) => {
  
  return (
    <Box sx={{paddingBottom: 10}}>
      <HomeBanner 
        imageAlt="Nguni Cows, looking at camera" 
        cardHeading="Welcome to the Australian Beef Initiative" 
        cardButtonLabel="View Events"
      />
      <HomeContentContainer
        id="objectives"
        heading="Our Objectives"
        TextComponent={ObjectivesText}
        variant="primary"
        buttonLabel={undefined}
      />
      <HomeContentContainer
        id="mission-statement"
        heading="Mission Statement"
        TextComponent={ObjectivesText}
        variant="primary"
        buttonLabel={undefined}
      />
      <Container maxWidth="sm" sx={{ marginBottom: 10}}>
        <div className="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/ZyyArZHW9tI" title="YouTube video" allowFullScreen></iframe>
        </div>
      </Container>
      <HomeContentContainer
        id="events"
        heading="Events"
        TextComponent={EventText}
        buttonLabel="View Upcoming Events"
        variant="secondary"
      />
      <HomeContentContainer
        id="farmers"
        heading="Farmers"
        TextComponent={FarmersText}
        buttonLabel={undefined}
        variant="secondary"
      />
    </Box>
  )
}
