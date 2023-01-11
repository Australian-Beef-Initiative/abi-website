import React from 'react'
import {Box} from '@mui/material'
import {HomeBanner} from './HomeBanner'
import {HomeContentContainer} from './HomeContentContainer'
import { EventText } from './EventText'
import { ObjectivesText } from './ObjectivesText'


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
        id="events"
        heading="Events"
        TextComponent={EventText}
        buttonLabel="View Upcoming Events"
        variant="secondary"
      />
    </Box>
  )
}
