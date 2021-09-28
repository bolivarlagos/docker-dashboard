import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import Switch from '@mui/material/Switch'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import DockerContext from './ContextApi'

import { localhost } from './utils/utils'

const BasicCard = () => {

    const [state, setState] = React.useState({ name: '', image: '', port: '', command: '' })
    const [checked, setChecked] = React.useState(false)
    const [radio, setRadio] = React.useState(true)
    const [id, setId] = React.useState('')
    const [action, setAction] = React.useState('')
    const history = useHistory()

    const { ids } = React.useContext(DockerContext)

    const executeContainer = async (actions) => {

        let content
        actions === '/run' ? content = {...state } : content = { id, action }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(content)
        }

        await fetch(localhost + actions, options)

        handleCancel()
        handleCancelation()

        if(actions === '/action'){
            
            setTimeout(() => {                
                history.push('/')
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
            }, 2000)
        }
    }

    const handleChange = e => setState({...state, [e.target.name]: e.target.value})

    const handleCancel = () => setState({...state, name: '', image: '', port: '', command: '' } )

    const handleSwitch = () => setChecked(!checked)
    
    const handleCreate = () => executeContainer('/run')

    const buttonChange = () => setRadio(!radio)

    const handleId = e => setId(e.target.value)

    const handleAction = e => setAction(e.target.value)

    const handleCancelation = () => {
        setId('')
        setAction('')
    }        

  return (
    <Card sx={{ minWidth: 275, minHeight: 400, mt: 5, mb: 1 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Deploy a Container
            </Typography>
            <RadioGroup 
                onChange={buttonChange} 
                defaultValue="New Container" 
                row 
                aria-label="choice" 
                name="row-radio-buttons-group">
                <FormControlLabel 
                    value="New Container" 
                    control={<Radio />} 
                    label="new container" />
                <FormControlLabel 
                    value="Existent Container" 
                    control={<Radio />} 
                    label="existent container" />      
            </RadioGroup>
            <Box sx={{ width: '100%' }}>
                { radio ?
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
                </Grid> :
                <Grid 
                    container 
                    rowSpacing={1} 
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl fullWidth>
                            <InputLabel >Image ID</InputLabel>
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
                        <Typography sx={{ fontSize: 12 }} color="text.secondary">
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
                        <Typography sx={{ fontSize: 12 }} color="text.secondary">
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
                                    onClick={() => executeContainer('/action')}>
                                        Run
                                </Button>                                    
                        </Stack>                        
                    </Grid>
                </Grid>
                }
            </Box>
        </CardContent>
    </Card>
  )
}

export default BasicCard
