import React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

const DummyTable = () => {

    const [delay, setDelay] = React.useState(true)

    setTimeout(() => {
        setDelay(false)
    }, 10000)

    return ( 
        <>
            {delay && <Box sx={{ width: '100%' }}><LinearProgress /></Box>}
        </>
    )
}

export default DummyTable
