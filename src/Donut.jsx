import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import { options } from './utils/utils'

const Donut = (props) => {
    
    const { ids, color, status, actives, inactives } = props
    const totalSize = ids.length 
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


    return <Doughnut data={data} options={options} /> 
}

export default Donut
