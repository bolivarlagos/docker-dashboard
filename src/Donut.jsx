import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import { options } from './utils/utils'
import DockerContext from './ContextApi'
import DummyChart from './DummyChart'


const Donut = (props) => {
    
    const { ids, color, status, actives, inactives } = props
    const totalSize = ids.length 
    const { isFetching } = React.useContext(DockerContext)

    let activesLength = null
    let inactivesLength = null
    
    if(actives){ 
        activesLength = actives.length
    }
    if(inactives){
        inactivesLength = inactives.length
    }
    
    const data = {
        datasets: [{
            data: [activesLength || inactivesLength, totalSize],
            backgroundColor: color }],
        labels: [status, 'Total']        
    } 

    return (
        <>
            { isFetching 
                ? <DummyChart />
                : <Doughnut data={data} options={options} />
            }
        </> 
    )     
}

export default Donut
