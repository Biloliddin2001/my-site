import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';
import Logo from '../assets/logo-1.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
           <header className="mt-[2px] w-full md:h-[80px] h-[60px] bg-zinc-100 drop-shadow-xl md:flex flex md:justify-around justify-between md:flex-row items-center animNav">
                <div className="logo ml-4 md:mt-[1px]">
                    <Link to="/" className='md:text-3xl text-xl font-bold hover:text-blue-600 transition'>Bilol.tj</Link>
                </div>
                {/* Nav Section  */}
                <div className="navs">
                    <nav className="md:block hidden">
                        <ul className="flex">
                            <li className='md:text-xl text-md hover:text-blue transition hover:uppercase pl-[15px]'><Link to="/">Home</Link></li>
                            <li className='md:text-xl text-md hover:text-blue transition hover:uppercase pl-[15px]'><Link to="/api/">Api</Link></li>
                            <li className='md:text-xl text-md hover:text-blue transition hover:uppercase pl-[15px]'><Link to="/about/">About</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="md:hidden block mr-4 mt-3">
                    { !isOpen ? 
                       <button onClick={toggle}><AiOutlineMenu className='text-2xl'  /></button> : <button onClick={toggle}><AiOutlineClose  className='text-2xl' /></button>
                    }
                    
                </div>
        
           </header>
           { isOpen && <hr /> }
           <div className="transition bg-zinc-100 pb-2 drop-shadow-xl animNav">
                    {   isOpen &&
                        <nav className="for-anim">
                            <ul className="flex flex-col items-center p-2">
                                <li className='md:text-xl text-md transition hover:text-blue hover:text-[17px] mt-2'><Link to="/">Home</Link></li>
                                <li className='md:text-xl text-md transition hover:text-blue hover:text-[17px] mt-2'><Link to="/api/">Api</Link></li>
                                <li className='md:text-xl text-md transition hover:text-blue hover:text-[17px] mt-2'><Link to="/about">About</Link></li>
                            </ul>
                        </nav>
                    }
                </div>
        </>
    )
}
export default Navbar


{/* <ul className="items flex">
<Link to="/"><li className='text-lg pl-[20px] text-black cursor-pointer hover:text-blue-600'>Home</li></Link>
<Link to="api/users"><li className='text-lg pl-[20px] text-black cursor-pointer'>Api</li></Link>
<Link><li className='text-lg pl-[20px] text-black cursor-pointer'>About</li></Link>
<Link><li className='text-lg pl-[20px] text-black cursor-pointer'>Help</li></Link>
<div className="flex relative top-[-5.8px] left-2 justify-end">
    <button id='btn-color' className='py-2 px-4 rounded-md text-black hover:bg-indigo-500'>Sign In</button>
    <button className='ml-3 py-2 px-4 rounded-md bg-indigo-500'>Sign up</button>
</div>
</ul> */}