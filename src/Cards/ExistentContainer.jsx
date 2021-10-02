import React from 'react'
import { useHistory } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import DockerContext from '../Context/ContextApi'
import { actions } from '../utils/utils'

const ExistentContainer = () => {

    const [id, setId] = React.useState('')
    const [action, setAction] = React.useState('')
    const history = useHistory()   

    const { ids, PostData } = React.useContext(DockerContext)

    const handleId = e => setId(e.target.value)
    const handleAction = e => setAction(e.target.value)    
    
    const handleCancelation = () => {
        setId('')
        setAction('')
    }

    const executeContainer = () => {

        const content = { id, action }

        PostData(content, actions)

        handleCancelation()

        setTimeout(() => {                
            history.push('/')
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }, 2000)
        
    }

    return (
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth>
                    <InputLabel >
                        Image ID
                    </InputLabel>
                    <Select value={id} onChange={handleId}>
                        {ids.map(dockerid => {
                            return (
                                <MenuItem
                                    key={dockerid}
                                    name={dockerid}
                                    value={dockerid}>
                                    {dockerid}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Typography sx={{ fontSize: 12 }} color="text.primary">
                    Select one of the Id's in the select field,
                    each id is a reference for the containers that are
                    running on the server.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <FormControl fullWidth>
                    <InputLabel >Action</InputLabel>
                    <Select
                        value={action}
                        onChange={handleAction}>
                        <MenuItem name="start" value="start">Start</MenuItem>
                        <MenuItem name="stop" value="stop">Stop</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Typography sx={{ fontSize: 12 }} color="text.primary">
                    Select one of the action that you want to
                    execute in the specific container, this action
                    will be applied in the container that you previously selected.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Stack
                    spacing={2}
                    direction="row">
                    <Button
                        variant="outlined"
                        onClick={handleCancelation}>
                            Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={executeContainer}>
                            Run
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default ExistentContainer
