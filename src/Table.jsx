import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import DockerContext from './ContextApi'
import DummyTable from './DummyTable'


export default function BasicTable() {

  const { head, body, isFetching} = React.useContext(DockerContext)

  
  return (
    <TableContainer component={Paper}>
      {isFetching 
        ? <DummyTable />
        : <Table sx={{ minWidth: 650 }} aria-label="simple table">     
            <TableHead>
              <TableRow>
                {head.map((item, index) => index === 0
                  ? <TableCell key={item}>{item}</TableCell>
                  : <TableCell key={item} align="right">{item}</TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {body.map((row, index) => {
                let newRow = [...row]
                let last = null
                if (row.length < 7) {
                  last = newRow.pop()
                  newRow = newRow.concat('Not Assigned', last)
                }
                return (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    {newRow.map((cell, index) => {
                      return (
                        !index
                          ? <TableCell component="th" scope="row" key={index + cell}>{cell}</TableCell>
                          : <TableCell key={index + cell} align="right">{cell}</TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
      }
    </TableContainer>
  )
}
