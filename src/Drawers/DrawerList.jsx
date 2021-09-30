import React from 'react'
import { Link } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PostAddIcon from '@mui/icons-material/PostAdd'
import TableChartIcon from '@mui/icons-material/TableChart'
import Autorenew from '@mui/icons-material/Autorenew'
import { ReactComponent as DockerIcon } from '../icons/docker-brands.svg'
import { menu } from '../utils/utils'


const menuIcons = (num) => {
    let elements = [
      <TableChartIcon />, 
      <DockerIcon width={24} height={24}/>, 
      <PostAddIcon />, 
      <Autorenew onClick={() => window.location.reload()}/>
    ]
  
    return elements[num]
}


const DrawerList = () => {
    return (
        <List>
          {menu.map((text, index) => (
            <ListItem button key={text + index }>
              <ListItemIcon>
                <Link to={text.route} style={{textDecoration: 'none', color: 'inherit'}}>
                  {menuIcons(index)}
                </Link>
              </ListItemIcon>
              <Link to={text.route} style={{textDecoration: 'none', color: 'inherit'}}>
                  <ListItemText primary={text.name} />
              </Link>
            </ListItem>
          ))}
        </List>
    )
}

export default DrawerList
