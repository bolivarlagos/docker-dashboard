import React from 'react'
import { dashboard } from '../utils/utils'

const DockerProvider = React.createContext()

export const ContextProvider = ({ children }) => {
    
    const [head, setHead] = React.useState([])
    const [body, setBody] = React.useState([])
    const [filteredBody, setFilteredBody] = React.useState([])
    const [ids, setIds] = React.useState([])
    const [actives, setActives] = React.useState([])
    const [inactives, setInactives] = React.useState([])
    const [isFetching, setIsFetching] = React.useState(true)

    const PostData = async (content, actions) => {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(content)
        }
        
        await fetch(actions, options)
      
    }

    const fetchData = async () => {
        
        const res = await fetch(dashboard)
        const js = await res.json()       

        const { head, body, ids, actives, inactives } = await js

        let newBody = body.map(row => {
            let newRow = [...row]
            let last = null 
            if(newRow.length < 7){
                last = newRow.pop()
                newRow = newRow.concat('Not Assigned', last)
            }
            return newRow 
        })

        setHead(head)
        setBody(newBody)
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
                isFetching,
                PostData,
                filteredBody,
                setFilteredBody
        }}>
            { children }
        </DockerProvider.Provider>
    )
}

export default DockerProvider