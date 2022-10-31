import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <header className="md:h-[80px] h-[60px] md:flex flex justify-between pr-5 pl-5 md:justify-around  w-full bg-zinc-100 drop-shadow-lg mb-1 sticky mt-[10px] top-[1px] animNav">
                <div className="logo md:mt-[23px] mt-[15px]">
                    <Link to="/" className='md:text-3xl text-lg font-bold'>Bilol.tj</Link>
                </div>
                <nav className="nav-menu-toggle mt-[27px] md:block hidden">
                    <ul className="items flex">
                        <Link to="/"><li className='text-lg pl-[20px] text-black cursor-pointer hover:text-blue-600'>Home</li></Link>
                        <Link to="api/users"><li className='text-lg pl-[20px] text-black cursor-pointer'>Api</li></Link>
                        <Link><li className='text-lg pl-[20px] text-black cursor-pointer'>About</li></Link>
                        <Link><li className='text-lg pl-[20px] text-black cursor-pointer'>Help</li></Link>
                        <div className="flex relative top-[-5.8px] left-2 justify-end">
                            <button id='btn-color' className='py-2 px-4 rounded-md text-black hover:bg-indigo-500'>Sign In</button>
                            <button className='ml-3 py-2 px-4 rounded-md bg-indigo-500'>Sign up</button>
                        </div>
                    </ul>
                </nav>
                <div className="btns md:mt-4 mt-[20px] block md:hidden">
                    { !isOpen ? 
                        <button id='aioutlineMenu' onClick={toggle}><AiOutlineMenu  className='md:text-3xl text-2xl text-black'/></button> : 
                        <button id='aioutlineClose' onClick={toggle}><AiOutlineClose className='md:text-3xl text-2xl text-black'/></button>
                    }
                </div>

            </header>
        </>
    )
}
export default Navbar