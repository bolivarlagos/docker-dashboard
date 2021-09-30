import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import DockerContext from '../Context/ContextApi'



const MainTable = () => {
    const { head, body} = React.useContext(DockerContext)
    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">     
            <TableHead>
              <TableRow>
                {head.map((item, index) => <TableCell key={'____' + item + index}>{item}</TableCell>)}
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
                    key={'__'+ index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >         
                    {newRow.map((cell, index) => <TableCell component="th" scope="row" key={'_' + index + cell}>{cell}</TableCell>)}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
    )
}

export default MainTable
