import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SwitchTheme from '../components/home/SwitchTheme'
import { BsPinterest } from 'react-icons/bs'
import CardLink from '../components/home/CardLink'
import Footer from '../components/home/Footer'

const Home = () => {
    const [darkMode, setDarkMode] = useState(false)
    

    return (
        <div className={` w-full h-full min-h-screen ${darkMode ? 'dark' : 'light'}`}>
            <SwitchTheme setToggle={setDarkMode} toggle={darkMode} />
            <div className='grid sm:grid-cols-2 xs:grid-col-1 max-sm:gap-4 sm:gap-12 max-sm:mx-4 sm:mx-10 mb-5'>
                <CardLink to='pinterest'/>
                <CardLink to='pinterest'/>
                <CardLink to='pinterest'/>
                <CardLink to='pinterest'/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home