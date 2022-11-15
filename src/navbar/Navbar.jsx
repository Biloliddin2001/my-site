import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';
// import MyLogo from '../assets/profile-2.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <>
           <header className="mt-[2px] w-full md:h-[80px] h-[60px] bg-transparent drop-shadow-xl md:flex flex md:justify-around justify-between md:flex-row items-center animNav">
                <div className="logo ml-4 md:mt-[1px]">
                    <Link to="/" className='md:text-3xl text-xl font-bold hover:text-blue-600 transition'>DDSTDT.tj</Link>
                </div>
                {/* Nav Section  */}
                <div className="navs mt-1.5">
                    <nav className="md:block hidden">
                        <ul className="flex">
                            <li className='md:text-xl transition text-md hover:text-blue md:hover:underline pl-[15px]'><Link to="/">Home</Link></li>
                            <li className='md:text-xl transition text-md hover:text-blue md:hover:underline pl-[15px]'><Link to="/api/">Api</Link></li>
                            <li className='md:text-xl transition text-md hover:text-blue md:hover:underline pl-[15px] pr-[15px]'><Link to="/lists/">Design-4</Link></li>
                            <li className='md:text-xl transition text-md hover:text-blue md:hover:underline pl-[15px] pr-[15px]'><Link to="/about/">About</Link></li>
                            {/* <li> <img src={ MyLogo } alt="Logo-image" title="Biloliddin" width="45" className='rounded-full absolute top-[15px] transition hover:scale-110 cursor-pointer' /> </li> */}
                        </ul>
                    </nav>
                </div>
                <div className="md:hidden block mr-4 mt-3">
                    { !isOpen ? 
                       <button onClick={toggle}><AiOutlineMenu className='text-2xl'/> </button> : <button onClick={toggle}><AiOutlineClose  className='text-2xl' /></button>
                    }
                </div>
           </header>
           { isOpen && <hr /> }
                <div className="transition bg-zinc-100 pb-0 drop-shadow-xl animNav">
                    {   isOpen &&
                        <nav className="for-anim">
                            <ul className="flex flex-col items-center p-2">
                                <li className='md:text-xl text-md transition hover:text-blue hover:text-[17px] mt-2'><Link to="/">Home</Link></li>
                                <li className='md:text-xl text-md transition hover:text-blue hover:text-[17px] mt-2'><Link to="/api/">Api</Link></li>
                                <li className='md:text-xl transition text-md hover:text-blue md:hover:underline pl-[15px] pr-[15px]'><Link to="/lists/">Design-4</Link></li>
                                <li className='md:text-xl text-md transition hover:text-blue hover:text-[17px] mt-2'><Link to="/about">About</Link></li>
                            </ul>
                        </nav>
                    }
                </div>
        </>
    )
}
export default Navbar