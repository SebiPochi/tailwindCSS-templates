import React from 'react'
import { Link } from 'react-router-dom'
import { BsPinterest } from 'react-icons/bs'

const CardLink = ({ to }) => {
  return (
    <Link to={`/${to}`}>
        <div className='border-4 relative border-slate-800 bg-slate-300 dark:border-slate-400 dark:bg-slate-700 rounded-2xl w-full h-64'>
            <img className='absolute opacity-40 object-none rounded-xl w-full h-[15.5rem]' src={require('../../img/pinterest.png')} />
            <BsPinterest className='relative text-5xl ml-3 mt-3'/>
        </div>
    </Link>
  )
}

export default CardLink