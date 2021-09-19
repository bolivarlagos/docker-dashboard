import React from 'react'
import Drawer from './Drawer'
import { ContextProvider } from './ContextApi'


const App = () => {
    return (
        <ContextProvider>
            <div className="app">
                <Drawer />
            </div>
        </ContextProvider>
    )
}

export default App
