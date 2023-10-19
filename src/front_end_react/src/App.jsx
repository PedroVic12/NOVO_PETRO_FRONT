import { useState } from 'react'
import './App.css'
import Header from './app/src/widgets/header'
import Sidebar from './app/src/widgets/sidebar'
import Home from './app/src/views/homePage'

function App() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
            <Home />
        </div>
    )
}

export default App
