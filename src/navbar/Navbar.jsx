import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsLightningChargeFill } from 'react-icons/bs'
import SmProfleImage from '../images/profille.jpg'
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    navigator.getBattery().then(battery => {
        let percentage = document.querySelector('.percentage')
        let foiz = document.querySelector('.foiz');
        let icon = document.querySelector('#icon_battery')
    
        function AllChangeBatteryInfo() {
            updateLevelInfo()
            updateChargeInfo()
        }
        AllChangeBatteryInfo()
        
        function updateLevelInfo() {
            percentage.style.height = battery.level * 100 + '%';
            foiz.innerHTML = battery.level * 100 + '%'
        }
        function updateChargeInfo() {
            if(battery.charging) {
                icon.style.display = 'block'
            } else {
                icon.style.display = 'none'
            }
        }
        battery.addEventListener('levelchange', () => {
            updateLevelInfo()
        })
        battery.addEventListener('chargingchange', () => {
            updateChargeInfo()
        })
    })

    return (
        <>
           <header className="slide-top sticky top-0 h-[60px] w-[100%] bg-zinc-100 drop-shadow-lg p-1 flex md:flex-row justify-between items-center
                        md:justify-around md:h-[70px]
           ">
            <div className="logo pl-7 md:p-2">
                <Link to="/"><span className='my__letter text-[18px] font-bold md:text-3xl hover:text-indigo-700'>Bilol.tj</span></Link>
            </div>
            <nav className="nav-menu hidden md:block">
                <ul className="nav-items md:flex md:justify-between">
                    <li className='nav-item mr-5 px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/">Home</Link></li>
                    <li className='nav-item mr-5 px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/my_skills">My Skills</Link></li>
                    <li className='nav-item mr-5 px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/password_generator">Pass_Generator</Link></li>
                    <li className='nav-item mr-5 px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <div className="btn hidden md:block">
                <button className='md:px-5 md:py-2 border border-indigo-500 rounded-md ml-2 text-black hover:bg-indigo-500 hover:text-white transition'><Link to="/login">Login</Link></button>
                <button className='md:px-5 md:py-2 border border-indigo-500 rounded-md ml-2 text-white hover:text-black hover:bg-transparent bg-indigo-500 transition'><Link to="/signup">Sign Up</Link></button>
            </div>
            <div className="card absolute right-3 hidden md:block ml-3 w-[75px] h-[45px] md:flex flex-row items-center justify-center">
                <div className="border-batery border rounded-sm border-blue-400 p-[1px] w-[20px] h-[40px] flex items-end">
                    <div className="percentage w-full  bg-green-400 rounded-sm"></div>
                    <BsLightningChargeFill id='icon_battery' className='absolute bottom-3 text-green-100' />
                </div>
                <div className="foiz ml-1 text-[15px]">100%</div>
            </div>
            <div className="nav-sections md:hidden block p-2">
                <button onClick={ toggle }>
                    { !isOpen ? <AiOutlineMenu className='text-2xl' />: <AiOutlineClose className='text-2xl' />}
                </button>
            </div>
           </header>
           { isOpen &&
            <nav className="nav-menu bg-zinc-100 drop-shadow-lg pb-2 fixed h-[860px] w-full slide-toggle-menu overflow-y-auto">
                <ul className="nav-items md:flex md:justify-between pl-5">
                    <li className='nav-item px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/">Home</Link></li><hr />
                    <li className='nav-item px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/my_skills">My Skills</Link></li><hr />
                    <li className='nav-item px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/password_generator">Pass_Generator</Link></li><hr />
                    <li className='nav-item px-4 py-2 rounded-md hover:text-white transition text-black md:text-1xl hover:bg-indigo-500'><Link to="/about">About</Link></li><hr />
                </ul>
                {/* <hr className='mb-1 mt-2 bg-indigo-600' /> */}
                <div className="flex flex-col p-2">
                    <button className='w-full h-[45px] border border-indigo-500 rounded-md text-black hover:bg-indigo-500 hover:text-white transition'><Link to="/login">Login</Link></button>
                    <button className='w-full h-[45px]  mt-3 border border-indigo-500 rounded-md text-white hover:text-black hover:bg-transparent bg-indigo-500 transition'><Link to="/signup">Sign Up</Link></button>
                </div>

                <div className="my_images w-full mt-7">
                    <div className="image-content flex justify-center mt-3 mb-3">
                        <img className='rounded-full w-[45%] inline-block' src={ SmProfleImage } alt="My Image" />
                    </div>
                    <div className="social-media mt-2 flex justify-center">
                        <li className='p-3 hover:scale-110 transition'>
                            <Link to="+992911076776"><AiOutlineWhatsApp className='text-3xl text-green-500'/></Link>
                        </li>
                        <li className='p-3 hover:scale-110 transition'>
                            <Link to="https://t.me/Biloliddin_Master"><FaTelegramPlane className='text-3xl text-blue-500'/></Link>
                        </li>
                        <li className='p-3 hover:scale-110 transition'>
                            <Link to="https://instagram.com/web_design_2001"> <BsInstagram className='text-3xl text-red-500'/></Link>
                        </li>
                    </div>
                </div>
            </nav>
            
           }
        </>
    )
}
export default Navbar