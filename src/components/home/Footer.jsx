import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='absolute flex justify-center items-center bottom-0 bg-slate-300 w-full py-5 '>
      <a href='https://github.com/SebiPochi' className='p-2 bg-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all'>
        <AiOutlineGithub className='text-4xl ' />
      </a>
    </footer>
  )
}

export default Footer