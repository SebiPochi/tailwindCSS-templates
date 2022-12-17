import React from 'react'

const Button = ({ text, margin}) => {
  return (
    <div className={`max-sm:hidden block py-4 ${margin}`}>
        <h3 className='font-semibold'>{text}</h3>
    </div>
  )
}

export default Button