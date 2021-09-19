import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import DockerContext from './ContextApi'


export default function BasicTable() {
  const { head, body } = React.useContext(DockerContext)
  const [action, setAction] = React.useState('Action')

  const handleChange = e => setAction(e.target.value)
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            { head.map((item, index) => index === 0 ? <TableCell key={index}>{item}</TableCell> : <TableCell key={index} align="right">{item}</TableCell>)}       
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map((row, index) => (            
            <TableRow 
              key={index} 
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {row.map((cell, index) => index === 0 ? <TableCell component="th" scope="row" key={index}>{cell}</TableCell>: <TableCell key={index} align="right">{ cell || 'not created'}</TableCell>)}                          
            </TableRow>            
          ))}          
        </TableBody>
      </Table>
    </TableContainer>
  )
}
              