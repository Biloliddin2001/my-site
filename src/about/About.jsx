import React from 'react'
import Navbar from '../navbar/navbar';
import MyImage from '../assets/about.jpg'
import { Link } from 'react-router-dom';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { SlScreenSmartphone } from 'react-icons/sl'


const About = () => {
    return (
        <>
            <Navbar />
            <div className="rounded-3xl bg-zinc-100 flex justify-center flex-col md:flex-row md:justify-around m-5 p-5">
                <div className="slide-1 text-content">
                    <h1 className='text-3xl font-bold mt-2 mb-2 text-center'>Hi, I'm Biloliddin!</h1>
                    <hr className='bg-indigo-700 mb-2' />
                    <p className='p-3 m-2'><i>Hey, I'm Biloliddin Shokirhojaev 21 old. I'm Front-End Web-Developer, my skills - Html5, Css3 JS, React.js and Django REST</i></p>
                    <div className="social-nets w-[98%] h-[100px] m-3 rounded-md flex justify-center items-center flex-col">
                        <li className='w-[100%] h-[50px] bg-red-500 flex justify-center items-center rounded-xl whatsapp'>
                            <Link to="+992911076776" className='text-[18px]'>
                                <AiOutlineWhatsApp className='inline-block text-2xl pb-1 mr-1.5' /><span>Whatsapp</span>    
                            </Link>
                        </li>
                        <li className='w-[100%] h-[50px] bg-red-500 flex justify-center items-center rounded-xl telegram mt-2'>
                            <Link to="https://t.me/Biloliddin_Master" className='text-[18px]'>
                                <FaTelegramPlane className='inline-block text-2xl pb-1 text-white mr-1.5' /><span className='text-white'>Telegram</span>    
                            </Link>
                        </li>
                    </div>
                    <hr className='bg-indigo-700 mb-5 mt-7' />
                </div>

                <div className="slide-2 ml-[18px] md:ml-0">
                    <img className='rounded-xl w-[280px] md:w-[350px]' src={ MyImage } alt="My Image"/>
                </div>
            </div>
            <div className="slide-3 flex flex-row justify-center items-center h-[100px] bg-zinc-100 m-5 p-5 rounded-3xl">
                <li className='m-2 cursor-pointer'>
                    <Link to="#"><BsFacebook className='text-2xl text-blue-700' /></Link>
                </li>
                <li className='m-2 cursor-pointer'>
                    <Link to="#"><BsInstagram className='text-2xl text-red-500' /></Link>
                </li>
                <li className='m-2 cursor-pointer'>
                    <Link to="#"><SlScreenSmartphone className='text-2xl' /></Link>
                </li>
            </div>
        </>
    )
}

export default About