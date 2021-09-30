import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import NewContainer from './NewContainer'
import ExistentContainer from './ExistentContainer'

const BasicCard = () => {  

    const [radio, setRadio] = React.useState(true)

    const buttonChange = () => setRadio(!radio)        

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
                { radio ? <NewContainer /> : <ExistentContainer /> }
            </Box>
        </CardContent>
    </Card>
  )
}

export default BasicCard