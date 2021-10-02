import React from 'react'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import DockerContext from '../Context/ContextApi'

import SmallTable from './SmallTable'

const MainTable = () => {
    const { head, body, filteredBody } = React.useContext(DockerContext)
    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">     
          <TableHead>
            <TableRow>
              {head.map((item, index) => <TableCell key={'____' + item + index}>{item}</TableCell>)}
            </TableRow>
          </TableHead> 
          {filteredBody.length > 0 ? <SmallTable body={filteredBody}/> : <SmallTable body={body} /> }         
        </Table>
    )
}

export default MainTable