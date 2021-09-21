import React from 'react'

const DockerProvider = React.createContext()

export const ContextProvider = ({ children }) => {
    
    const [data, setData] = React.useState([]) 
    const [head, setHead] = React.useState([])
    const [body, setBody] = React.useState([])
    const [ids, setIds] = React.useState([])

    const fetchData = async () => {
        
        const res = await fetch('http://localhost:4000/dashboard')
        const js = await res.json()
        const { head, body, ids } = await js 

        setData(js)
        setHead(head)
        setBody(body)
        setIds(ids)
    }   

    React.useEffect(() => {
        fetchData()       
    }, []) 
    

    return (
        <DockerProvider.Provider value={{ data, head, body, ids }}>
            { children }
        </DockerProvider.Provider>
    )
}

export default DockerProvider