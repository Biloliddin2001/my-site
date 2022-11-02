import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import MyImage from '../assets/three_image.jpg'
import { FaTelegram } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { AiFillHeart } from 'react-icons/ai'

const About = () => {
    return (
        <>
            <Navbar />
            <div className='md:flex p-10 md:mr-[100px] md:ml-[100px] md:mt-7 justify-around rounded-xl  md:h-auto'>
                {/* for Image */}
                <div className="mt-0 mb-3 md:mb-1 slide-home-content">
                    <img src={ MyImage } width="350" alt="My Image" title='Biloliddin' className='rounded-3xl md:w-[660px]' />
                </div>
                {/* for deskription */}
                <div className="ml-1 mt-2 p-3 md:p-1 md:mt-0 bg-zinc-200 rounded-3xl slide-home-content-2">

                    <h1 className='slide-home-title  md:text-3xl md:mt-3 md:ml-4 ml-[5px] mr-[5px] text-[18px] mb-1 font-bold my_name'>Hey, I`m Biloliddin Shokirhojaev</h1>

                    <div className="slide-home-desc ml-[5px] mr-[5px] mt-2 mb-4 md:ml-5 md:mt-6 my-description">I'm Biloliddin, Frontent Web-Developer in React-js and Back-end in Djando-REST.
                        I'm 21-old, live in Dushanbe-Tajikistan <AiFillHeart className='inline-block text-red-600' />
                        <p className='md:blur-sm md:hover:blur-0'><i>
                            Recent Computer Science graduate with hands-on experience. Took part in 6-month-long Agilie development process project, working with:
                            <b> JavaScript Html5, Css3, Ajax, Rest, React and React Vite. </b></i></p>
                    </div>

                    <div className="flex justify-center md:justify-start md:ml-6 md:mt-5">
                        <ul className='flex justify-start'>
                            <li className='ml-5'><Link to="#"><FaTelegram className='md:text-4xl text-2xl       text-blue-600 md:mr-5 mr-2 hover:border-b-2 hover:border-blue-600'/></Link></li>
                            <li className='ml-5'><Link to="#"> <AiFillInstagram className='md:text-4xl text-2xl text-red-700 md:mr-5 md:ml-5 mr-2 hover:border-b-2 hover:border-red-700'/></Link></li>
                            <li className='ml-5'><Link to="#"> <RiWhatsappFill className='md:text-4xl text-2xl  text-green-600 md:mr-5 md:ml-5 mr-2 hover:border-b-2 hover:border-green-600'/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About