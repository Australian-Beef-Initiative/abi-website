import React from 'react'
import { Container, Card, CardContent, Typography, CardActions, Button, Chip, Box } from '@mui/material'
import { farmCreamFont, farmBrown, farmCream } from '../colours'

export const ObjectivesText = () => {
    return (
        <Box>
            <Typography variant="body1" sx={{marginBottom: 3}}>
                ABI was formed to facilitate a decentralised network connecting regenerative farmers with consumers, providing benefits including:
            </Typography>
            <Container>
                <Typography variant="body1" sx={{display: 'list-item'}}>
                Premium animal protein and fresh farm produce direct to consumers’ door - promoting good health for Australian families
                </Typography>
                <Typography variant="body1" sx={{display: 'list-item'}}>
                Higher revenues for Australian farmers by enabling them to capture retail prices for their products from consumers who value the methods by which their animals are raised and processed
                </Typography>
                <Typography variant="body1" sx={{display: 'list-item'}}>
                Superior animal welfare, maximising quality of life and humane processing procedures 
                </Typography>
                <Typography variant="body1" sx={{display: 'list-item'}}>
                Regeneration of our soil, one of our most valuable assets
                </Typography>
                <Typography variant="body1" sx={{display: 'list-item'}}>
                The opportunity for consumers to form and build a relationship with the farmers growing our food
                </Typography>
            </Container>
        </Box>
    )
}