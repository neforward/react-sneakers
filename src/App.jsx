import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Liked from './pages/Liked'
import Header from './components/Header'
import { useState } from 'react'

const App = () => {
    const [profileItems, setProfileItems] = useState([])
    return (
        <>
            <div className="wrapper-container">
                <div className="wrapper">
                    <Header setProfileItems={setProfileItems} />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/profile' element={<Profile profileItems={profileItems} />} />
                        <Route path='/liked' element={<Liked />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
