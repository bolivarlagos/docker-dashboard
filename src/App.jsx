import React from 'react'
import Drawer from './Drawer'
import { ContextProvider } from './Context/ContextApi'

const App = () => {
    return (
        <ContextProvider>
            <Drawer />            
        </ContextProvider>
    )
}

export default App
