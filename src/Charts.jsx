import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import Donut from './Donut'
import DockerContext from './ContextApi'

import { green, blue, activeStatus, pausedStatus } from './utils/utils'

const RowAndColumnSpacing = () => {

  const { ids } = React.useContext(DockerContext)

  return (
    <Box sx={{ mt: 1 , mb: 5}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Donut ids={ids} color={green} status={activeStatus} total={3}/>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Donut ids={ids} color={blue} status={pausedStatus} total={1}/>
        </Grid>      
      </Grid>
    </Box>
  )
}

export default RowAndColumnSpacing