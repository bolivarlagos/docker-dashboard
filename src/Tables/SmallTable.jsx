import React from 'react'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

const SmallTable = ({ body }) => {

    return (
        <TableBody>
            {body.map((each, index) => {
                return (
                    <TableRow
                        key={'__' + index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        {each.map((item, index) => <TableCell component="th" scope="row" key={'_' + index + item}>{item}</TableCell>)}
                    </TableRow>
                )
            })}
        </TableBody>
    )
}

export default SmallTable
