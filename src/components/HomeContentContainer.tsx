import React from 'react'
import { Container, Button, Chip } from '@mui/material'

export const HomeContentContainer = (props: {heading: string, TextComponent: Function, buttonLabel: string | undefined | null, variant: string, id: string }) => {
  const {heading, TextComponent, buttonLabel, variant, id} = props
    return (
        <Container id={id} maxWidth="sm" sx={{marginBottom: 10}}>
          <Chip label={heading} color={`${variant === 'primary' ? 'primary' : 'secondary'}`} size="medium" sx={{marginBottom: 3}}/>
          <Container maxWidth="sm">
            <TextComponent/>
            {buttonLabel && 
              <Button size="large" variant="contained" color={`${variant === 'primary' ? 'secondary' : 'primary'}`} sx={{marginTop: 3}}>{buttonLabel}</Button>
            }
          </Container>
      </Container>
    )
}