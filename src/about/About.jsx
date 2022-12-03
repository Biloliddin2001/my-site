import React from 'react'
import Navbar from '../navbar/navbar';
import MyImage from '../assets/about.jpg'
import { Link } from 'react-router-dom';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { SlScreenSmartphone } from 'react-icons/sl'
import Footer from '../footer/footer';


const About = () => {
    return (
        <>
            <Navbar />
            <div className="rounded-3xl bg-zinc-100 flex justify-center flex-col md:flex-row md:justify-around m-5 p-5
                md:p-0 md:m-10
            ">
                <div className="slide-1 text-content md:border-r-2 md:w-1/2 md:p-[60px]">
                    <h1 className='text-3xl font-bold mt-2 mb-2 text-center md:text-[40px] md:pb-3'>Hi, I'm Biloliddin!</h1>
                    <hr className='bg-indigo-700 mb-2' />
                    <p className='p-3 m-2'><i>Hey, I'm Biloliddin Shokirhojaev 21 old. I'm Front-End Web-Developer, my skills - Html5, Css3 JS, React.js and Django REST</i></p>

                        {/* Buttons */}
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
                    <hr className='bg-indigo-700 mb-5 mt-7 md:hidden' />
                <div className="my-text hidden md:block mt-3">
                    <h2 className='text-center pt-3 font-bold'>Junior Software Engineer</h2>
                    <p className='p-2'>
                        <i>
                            Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        </i>
                    </p>
                </div>
                </div>
                {/* Image Content */}
                <div className="slide-2 ml-[18px] md:ml-0 md:p-10">
                    <img className='rounded-xl w-[280px] md:w-[350px]' src={ MyImage } alt="My Image"/>
                </div>
                <div className="my-text md:hidden mt-3">
                    <h2 className='text-center pt-3 font-bold'>Junior Software Engineer</h2>
                    <p className='p-2'>
                        Describe your role here lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 
                        nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                    </p>
                </div>
            </div>


            <div className="slide-3 flex flex-row justify-center items-center h-[100px] bg-zinc-100 md:m-8 m-5 p-5 rounded-3xl">
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

            {/* <Footer /> */}
        </>
    )
}

export default About