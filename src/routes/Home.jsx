import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SwitchTheme from '../components/home/SwitchTheme'
import { BsPinterest } from 'react-icons/bs'
import CardLink from '../components/home/CardLink'

const Home = () => {
    const [darkMode, setDarkMode] = useState(false)
    

    return (
        <div className={` w-screen h-screen ${darkMode ? 'dark' : 'light'}`}>
            <SwitchTheme setToggle={setDarkMode} toggle={darkMode} />
            <div className='grid sm:grid-cols-2 xs:grid-col-1 xs:gap-4 sm:gap-12 xs:mx-4 sm:mx-10    '>
                <CardLink to='pinterest'/>
                <CardLink to='pinterest'/>
                <CardLink to='pinterest'/>
                <CardLink to='pinterest'/>
            </div>
        </div>
    )
}

export default Home