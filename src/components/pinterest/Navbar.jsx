import React from 'react'
import ButtonBlack from './ButtonBlack';
import Button from './Button';
import SearchBar from './SearchBar';
import { IoIosNotifications } from 'react-icons/io'
import { BsFillChatDotsFill, BsPinterest } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { AiFillDollarCircle } from 'react-icons/ai'

const Navbar = () => {

    return (
        <div className="bg-slate-50 min-h-min flex flex-row py-2 items-center px-4">
            <BsPinterest className='text-red-600 text-2xl leading-10 mx-3 min-w-min'/>
            <ButtonBlack/>
            <Button margin={'mx-5'} text={"Hoy"}/>
            <Button margin={'ml-5'} text={"Crear"}/>
            <RiArrowDropDownLine className='text-gray-900 text-4xl'/>
            <SearchBar/>
            <div className='p-2 hover:bg-slate-200 rounded-full'>
                <IoIosNotifications className='text-gray-500 text-3xl leading-10 '/>
            </div>
            <div className='p-3 hover:bg-slate-200 rounded-full'>
                <BsFillChatDotsFill className='text-gray-500 text-2xl leading-10'/>
            </div>
            <AiFillDollarCircle className='text-gray-300 bg-black rounded-full text-2xl leading-10 mx-2 min-w-min'/>
            <RiArrowDropDownLine className='text-gray-500 text-4xl'/>
        </div>
    )
}

export default Navbar