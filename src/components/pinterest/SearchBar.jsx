import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <>
      <div className='sm:hidden p-2 flex justify-end hover:bg-slate-200 w-3/4 rounded-full'>
        <FaSearch className='text-gray-500 text-xl leading-10'/>
      </div>
      <div className='max-sm:hidden bg-gray-200 hover:bg-gray-300 w-3/4 h-12 rounded-full flex-row flex leading-10 p-1 mx-3 '>
          <FaSearch className='text-gray-400 h-10 leading-10 mx-4'/>
          <h3 className='text-gray-500'>Buscar</h3>
          {/* <input type="text" className='bg-gray-300 w-1/2 h-12 ' placeholder={"Buscar"}/> */}
      </div>
    </>
  )
}

export default SearchBar