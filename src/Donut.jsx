import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import DockerContext from './ContextApi'

const Donut = () => {
    
    const { data } = React.useContext(DockerContext)    

    return (
        <Doughnut data={data} width={100} height={50}/>
    )
}

export default Donut
