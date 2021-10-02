import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Charts from '../Charts/Charts'
import Table from '../Tables/Table'
import DeployCard from '../Cards/DeployCard'
import FileDocker from '../Cards/FileDocker'

const MenuRoutes = () => {
    return (
        <Switch>
            <Route exact path="/">
              <Redirect to="/dashboard"/>
            </Route>
            <Route path="/dashboard"> 
              <Charts />
              <Table />
            </Route>
            <Route path="/create">
              <DeployCard />
            </Route>
            <Route path="/dockerfile">
              <FileDocker />
            </Route>
        </Switch>
    )
}

export default MenuRoutes
