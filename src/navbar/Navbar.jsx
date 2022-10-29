import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
        000000000
        <div className="bg-sky-400 md:drop-shadow-xl mt-1 h-[80px] flex justify-around z-10 animNav">
            <div className="mt-4">
                <h1 className='text-2xl mt-1 font-bold text-white md:text-3xl'><Link to="/">Bilol_Dev</Link></h1>
            </div>
            <div className="hidden md:block mt-6">
                <ul className='flex justify-between'>
                    <li className='pr-5 text-lg cursor-pointer hover:text-white'><Link to="/">Home</Link></li>
                    <li className='pr-5 text-lg cursor-pointer hover:text-white'><Link to="/my_images">My Images</Link></li>
                    <li className='pr-5 text-lg cursor-pointer hover:text-white'><Link to="/about">About</Link></li>
                    <div className="relative bottom-3">
                        <button className='text-black py-3 px-6 ml-2'><Link to="/login">Sign In</Link></button>
                        <button className='bg-sky-600 py-3 px-6 transition ml-5 text-white'><Link to="/login">Sign Up</Link></button>
                    </div>
                </ul>
            </div>
            {/* DropDown Menu */}
            <button className='text-black px-5 block md:hidden' onClick={toggle}>
                { !isOpen ?  <AiOutlineMenu className='text-2xl'/> :  <AiOutlineClose className='text-2xl'/>}
            </button>
        </div>
        <div className="bg-zinc-200 drop-shadow-xl">
                { isOpen && 
                    <ul className='block ml-3 mr-3 md:hidden'>
                        <li className='pr-5 pt-2 text-2xl text-center pt-3 cursor-pointer hover:text-indigo-500'><Link to="/">Home</Link></li>
                        <li className='pr-5 pt-2 text-2xl text-center pt-3 cursor-pointer hover:text-indigo-500'><Link to="/my_images">My Image</Link></li>
                        <li className='pr-5 pt-2 text-2xl text-center pt-3 cursor-pointer hover:text-indigo-500'><Link to="/about">About</Link></li>
                        <div className="mt-2">
                            <button className='text-black block w-full py-3 px-6 mt-5'><Link to="/login">Sign In</Link></button>
                            <button className='block w-full py-3 px-6 transition bg-indigo-500 mt-3 mb-5 text-white'><Link to="/login">Sign Up</Link></button>
                        </div>
                    </ul>
                }
            </div>
        </>
    )
}
export default Navbar