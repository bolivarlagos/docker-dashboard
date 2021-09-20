import React from 'react'
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


export default function BasicCard() {

    const [state, setState] = React.useState({ name: '', image: '', port: '', command: '' })
    const [checked, setChecked] = React.useState(false)
    const [radio, setRadio] = React.useState(true)

    const handleChange = e => {
        if(e.target.name === 'port'){
            console.log('ok')
            console.log(typeof(e.target.value))

            typeof(e.target.value) !== 'number' ? setState({...state, [e.target.name] : ''}) : setState({...state, [e.target.name]: e.target.value})
        } else {
            setState({...state, [e.target.name]: e.target.value})
        }
    }

    const handleCancel = e => setState({...state, name: '', image: '', port: '', command: '' } )

    const fetchData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const js = await res.json()
        console.log(js)
    }

    const handleSwitch = e => setChecked(!checked)
    
    const handleCreate = e => fetchData()

    const buttonChange = e => setRadio(!radio)
        

  return (
    <Card sx={{ minWidth: 275, minHeight: 400 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Deploy a Container
            </Typography>
            <RadioGroup onChange={buttonChange} defaultValue="New Container" row aria-label="choice" name="row-radio-buttons-group">
                <FormControlLabel value="New Container" control={<Radio />} label="new container" />
                <FormControlLabel value="Existent Container" control={<Radio />} label="existent container" />      
            </RadioGroup>
            <Box sx={{ width: '100%' }}>
                { radio ?
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6}>                        
                        <TextField disabled={checked} value={state.name} name="name" onChange={handleChange} label="App Name" variant="outlined" />                                                
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>                        
                        <Typography>A brief app description</Typography>                        
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>                        
                        <TextField disabled={checked} value={state.image} name="image" onChange={handleChange} label="Container Image" variant="outlined" />                        
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography>A brief Container Image description</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField disabled={checked} value={state.port} name="port" type="number" onChange={handleChange} label="Container Port" variant="outlined" />                       
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography>A brief Container Port description</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField  disabled={!checked} value={state.command} name="command" onChange={handleChange} label="Specific Command" variant="outlined" />
                        <Switch
                            checked={checked}
                            onChange={handleSwitch}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography>A brief Specific Command description</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>                        
                        <Stack spacing={2} direction="row">
                            <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                            <Button variant="contained" onClick={handleCreate}>Create</Button>                                    
                        </Stack>                        
                    </Grid>
                </Grid> :
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl fullWidth>
                            <InputLabel >Image ID</InputLabel>
                            <Select>
                                {['id-1', 'id-2', 'id-3'].map(id => <MenuItem value={id}>{id}</MenuItem>)}                                
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>                        
                        <Typography>A brief app description</Typography>                        
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl fullWidth>
                            <InputLabel >Action</InputLabel>
                            <Select>
                                <MenuItem value="start">Start</MenuItem>
                                <MenuItem value="stop">Stop</MenuItem>                                
                            </Select>
                        </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={6}>                        
                        <Typography>A brief app description</Typography>                        
                    </Grid>
                    
                    <Grid item xs={12} sm={6} md={6}>                        
                        <Stack spacing={2} direction="row">
                            <Button variant="outlined">Cancel</Button>
                            <Button variant="contained">Create</Button>                                    
                        </Stack>                        
                    </Grid>
                </Grid>
                }
            </Box>
        </CardContent>
    </Card>
  )
}



















            
