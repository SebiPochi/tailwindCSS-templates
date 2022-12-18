import React from 'react'

const SwitchTheme = ({ setToggle, toggle }) => {
  return (
    <label onChange={() => setToggle(!toggle)} className="inline-flex m-5 relative cursor-pointer max-sm:ml-5 ml-10">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-24 h-12 
        bg-gray-600 peer-focus:outline-none rounded-full peer 
        dark:bg-gray-700 peer-checked:after:translate-x-full 
        peer-checked:after:border-white after:content-[''] 
        after:absolute after:top-[4px] after:left-[8px] after:bg-slate-100
        after:border-gray-300  after:rounded-full 
        after:h-10 after:w-10 after:transition-all after:dark:bg-gray-800
        dark:border-gray-600 peer-checked:bg-slate-400"></div>
    </label>
  )
}

export default SwitchTheme