import React from 'react'
import { dashboard } from '../utils/utils'

const DockerProvider = React.createContext()

export const ContextProvider = ({ children }) => {
    
    const [head, setHead] = React.useState([])
    const [body, setBody] = React.useState([])
    const [ids, setIds] = React.useState([])
    const [actives, setActives] = React.useState([])
    const [inactives, setInactives] = React.useState([])
    const [isFetching, setIsFetching] = React.useState(true)

    const fetchData = async () => {
        
        const res = await fetch(dashboard)
        const js = await res.json()
        const { head, body, ids, actives, inactives } = await js  

        setHead(head)
        setBody(body)
        setIds(ids)
        setActives(actives)
        setInactives(inactives)
        setIsFetching(false)    
    }   

    React.useEffect(() => {
        fetchData()       
    }, [])   

    return (
        <DockerProvider.Provider value={{                 
                head, 
                body, 
                ids, 
                actives, 
                inactives, 
                isFetching
        }}>
            { children }
        </DockerProvider.Provider>
    )
}

export default DockerProvider