import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MyImage from '../images/profille.jpg';
import { ImFacebook, ImTelegram, ImWhatsapp } from 'react-icons/im'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
           <header className="slide-top sticky h-[80px] w-[100%] bg-zinc-100 drop-shadow-lg p-1 flex md:flex-row justify-between items-center
                        md:justify-around
           ">
            <div className="logo p-2">
                <Link to="#"><span className='my__letter text-2xl font-bold md:text-3xl hover:text-indigo-700'>Bilol.tj</span></Link>
            </div>
            <nav className="nav-menu hidden md:block">
                <ul className="nav-items md:flex md:justify-between">
                    <li className='nav-item mr-5 px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/">Home</Link></li>
                    <li className='nav-item mr-5 px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/contact">Contact</Link></li>
                    <li className='nav-item mr-5 px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="#">Jurnal</Link></li>
                    <li className='nav-item mr-5 px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <div className="btn hidden md:block">
                <button className='md:px-5 md:py-2 border border-indigo-500 rounded-md ml-2 text-black hover:bg-indigo-500 hover:text-white transition'>Sign In</button>
                <button className='md:px-5 md:py-2 border border-indigo-500 rounded-md ml-2 text-white hover:text-black hover:bg-transparent bg-indigo-500 transition'>Sign Up</button>
            </div>
            <div className="nav-sections md:hidden block p-2">
                <button onClick={ toggle }>
                    { !isOpen ? <AiOutlineMenu className='text-3xl' />: <AiOutlineClose className='text-3xl' />}
                </button>
            
            </div>
           </header>
           { isOpen &&
            <nav className="nav-menu bg-zinc-100 drop-shadow-lg pb-2 text-center slide-toggle-menu">
                <ul className="nav-items md:flex md:justify-between">
                    <li className='nav-item px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/">Home</Link></li>
                    <li className='nav-item px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/contact">Contact</Link></li>
                    <li className='nav-item px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="#">Jurnal</Link></li>
                    <li className='nav-item px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/about">About</Link></li>
                </ul>
                <hr className='mb-1 mt-2 bg-indigo-600' />
                <div className="flex flex-col p-2">
                    <button className='w-full h-[45px] border border-indigo-500 rounded-md text-black hover:bg-indigo-500 hover:text-white transition'>Sign In</button>
                    <button className='w-full h-[45px]  mt-3 border border-indigo-500 rounded-md text-white hover:text-black hover:bg-transparent bg-indigo-500 transition'>Sign Up</button>
                </div>
            </nav>
            
           }
           
        </>
    )
}
export default Navbar