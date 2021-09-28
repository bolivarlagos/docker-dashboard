import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'

import { builder } from './utils/utils'

const FileDocker = () => {
    
    const [names, setNames] = React.useState({ name: '', file: '' })

    const handleChange = (e) => setNames({...names, [e.target.name]: e.target.value })

    const clear = () => setNames({ name: '', file: '' })

    const build = async () => {

        let content = {...names }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(content)
        }
        
        await fetch(builder, options)
        clear()        
    }

    return (
        <Card sx={{ minWidth: 275, minHeight: 400, mt: 5, mb: 1 }}>
            <CardContent>
                <Typography 
                    sx={{ fontSize: 14 }} 
                    color="text.secondary" 
                    gutterBottom
                >
                    Create Docker File 
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <Grid 
                        container 
                        rowSpacing={1} 
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >                   
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField 
                                fullWidth
                                label="Dockerfile Name" 
                                variant="outlined" 
                                name="name"
                                value={names.name}
                                onChange={handleChange}
                            />                            
                        </Grid>            
                        <Grid item xs={12} sm={6} md={6}>                        
                            <Typography 
                                sx={{ fontSize: 12 }} 
                                color="text.secondary">
                                    This is be the name of the image that you will build.
                            </Typography>                        
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}> 
                            <TextField 
                                id="outlined-basic" 
                                label="Docker File" 
                                variant="outlined" 
                                name="file"
                                multiline 
                                rows={8} 
                                fullWidth
                                value={names.file}
                                onChange={handleChange}

                            />
                        </Grid>                            
                        <Grid item xs={12} sm={6} md={6}>                        
                            <Typography
                            sx={{ fontSize: 12 }} 
                            color="text.secondary">
                                By creating a Dockerfile you can build your own customizable image based on a base image,
                                you can use that same image to later deploy new applications.
                                Once your image is created you no longer need the Dockerfile, so the Dockerfile content 
                                will allways be overwriten.
                            </Typography>                        
                        </Grid>      
                        <Grid item xs={12} sm={6} md={6}>                        
                            <Stack spacing={2} direction="row">
                                <Button variant="outlined" onClick={clear}>Cancel</Button>
                                <Button variant="contained" onClick={build}>Build</Button>                                    
                            </Stack>                        
                        </Grid>
                    </Grid>
                </Box >
            </CardContent>
        </Card>
    )
}

export default FileDocker
