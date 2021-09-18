import React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

import Donut from './Donut'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ mt: 1 , mb: 5}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
            <Item>
              <Donut />
            </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Item>
              <Donut />
            </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Item>
              <Donut />
            </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Item>
              <Donut />
            </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
