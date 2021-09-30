import React from 'react'
import TableContainer from '@mui/material/TableContainer'
import Paper from '@mui/material/Paper'
import DockerContext from '../Context/ContextApi'
import DummyTable from './DummyTable'
import MainTable from './MainTable'

export default function BasicTable() {

  const { isFetching } = React.useContext(DockerContext)
  
  return (
    <TableContainer component={Paper}>
      { isFetching ? <DummyTable /> : <MainTable /> }
    </TableContainer>
  )
}
