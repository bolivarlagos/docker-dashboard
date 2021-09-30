import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import { localhost } from '../utils/utils'


const NewContainer = () => {

    const [state, setState] = React.useState({ name: '', image: '', port: '', command: '' })
    const [checked, setChecked] = React.useState(false) 
    

    const handleChange = e => setState({...state, [e.target.name]: e.target.value})
    const handleSwitch = () => setChecked(!checked)  
    const handleCreate = () => executeContainer('/run')
    const handleCancel = () => setState({...state, name: '', image: '', port: '', command: '' })
    

    const executeContainer = async () => {

        const content = {...state }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(content)
        }

        await fetch(localhost + '/run', options)

        handleCancel()   
    }

    return (
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                    disabled={checked}
                    value={state.name}
                    name="name"
                    onChange={handleChange}
                    label="App Name"
                    variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                    A container is a standard unit of software
                    that packages up code and all its dependencies so the
                    application runs quickly and reliably.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                    disabled={checked}
                    value={state.image}
                    name="image"
                    onChange={handleChange}
                    label="Container Image"
                    variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                    A Docker container image is a lightweight,
                    standalone, executable package of software that includes
                    everything needed to run an application.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                    disabled={checked}
                    value={state.port}
                    name="port"
                    onChange={handleChange}
                    label="Container Port"
                    variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                    To access the application
                    in the container via a port number, you need to map the port number
                    of the container to the port number of the host.
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField
                    disabled={!checked}
                    value={state.command}
                    name="command"
                    onChange={handleChange}
                    label="Specific Command"
                    variant="outlined" />
                <Switch
                    checked={checked}
                    onChange={handleSwitch}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                    Start your container using
                    the docker run command and specify
                    the name of the image you just created
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Stack spacing={2} direction="row">
                    <Button
                        variant="outlined"
                        onClick={handleCancel}>
                            Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleCreate}>
                            Create
                    </Button>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default NewContainer
