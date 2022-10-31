import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import MyImage from '../assets/three_image.jpg'
import { FaTelegram } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { AiFillHeart } from 'react-icons/ai'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='md:flex p-10 md:mr-[100px] md:ml-[100px] md:mt-7 justify-around rounded-xl slide-home-content md:h-auto'>
                {/* for Image */}
                <div className="mt-0 mb-3 md:mb-1">
                    <img src={ MyImage } width="350" alt="My Image" title='Biloliddin' className='rounded-3xl md:w-[360px]' />
                </div>
                {/* for deskription */}
                <div className="ml-1 mt-2 p-5 md:p-3 md:mt-0 bg-zinc-200 rounded-3xl">
                    <h1 className='title md:text-3xl md:mt-5 md:ml-5 ml-[5px] mr-[5px] text-[18px] mb-1 font-bold'>Hey, I`m Biloliddin Shokirhojaev</h1>
                    <div className="ml-[5px] mr-[5px] mt-2 mb-4 md:ml-5 md:mt-6">I'm Biloliddin, Frontent Web-Developer in React-js and Back-end in Djando-REST. <br />
                        I'm 21-old, live in Dushanbe-Tajikistan <AiFillHeart className='inline-block text-red-600' />
                    </div>
                    <div className="flex justify-center md:justify-start md:ml-6 md:mt-5">
                        <ul className='flex justify-start'>
                            <li><Link to="https://t.me/Biloliddin_Master"><FaTelegram className='md:text-4xl text-2xl hover:text-blue-600 md:mr-5 mr-2 hover:border-b-2 hover:border-blue-600'/></Link></li>
                            <li><Link to="https://instagram/bilol_2001_tjk"> <AiFillInstagram className='md:text-4xl text-2xl hover:text-red-700 md:mr-5 md:ml-5 mr-2 hover:border-b-2 hover:border-red-700'/></Link></li>
                            <li><Link to="#"> <RiWhatsappFill className='md:text-4xl text-2xl hover:text-green-600 md:mr-5 md:ml-5 mr-2 hover:border-b-2 hover:border-green-600'/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home