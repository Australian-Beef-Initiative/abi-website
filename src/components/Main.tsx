import React from 'react'
import {Box} from '@mui/material'
import {ContentContainer} from './ContentContainer'


export const Main = ( props: any ) => {
  return (
    <Box sx={{paddingBottom: 10}}>
      <ContentContainer 
        imageAlt="Nguni Cows, looking at camera" 
        cardHeading="Welcome to the Australian Beef Initiative" 
        cardButtonLabel="View Events"
      />
      <ContentContainer 
        imageAlt="Nguni Cows, looking at camera" 
        cardHeading="Placeholder Heading Text" 
        cardButtonLabel="Check out the farms"
      />
    </Box>
  )
}
