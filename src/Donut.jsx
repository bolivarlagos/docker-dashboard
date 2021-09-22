import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import { options } from './utils/utils'


const Donut = ({ ids, color, status, total }) => {
    
    const totalSize = ids.length

    const data = {
        datasets: [{
            data: [total, totalSize],
            backgroundColor: color }],
        labels: [status, 'Total']        
    }
   

    return (
        <Doughnut data={data} options={options} />
    )
}

export default Donut
