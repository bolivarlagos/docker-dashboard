import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { options } from '../utils/utils'
import { noData } from '../utils/utils'

const DummyChart = () => {    

    return <Doughnut data={noData} options={options} />
    
}

export default DummyChart
