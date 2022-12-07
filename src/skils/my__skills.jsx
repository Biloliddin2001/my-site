import React from 'react'
import Navbar from '../navbar/navbar'
import { DiHtml5, DiCss3 } from 'react-icons/di'
import { SiJavascript, SiReact, SiDjango } from 'react-icons/si'
import Footer from '../footer/footer'

const My__Skills = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center md:flex-row flex-col md:w-[100%]">
                <div className="slide-2 bg-zinc-100 p-5 m-5 rounded-xl w-auto md:w-[90%]">
                    <div className="text mb-3 p-2">
                        <h1 className='text-center text-2xl font-bold'>SKILLS & PROFICIENCY</h1>
                    </div>
                    <hr className='border-b-2 border-indigo-500 mb-2' />

                    {/* HTML5 */}
                    <div className="flex justify-between mt-10 mb-3">
                        <span className="text-base font-bold text-zinc-700 dark:text-white">Html5</span>
                        <span><DiHtml5 className='text-2xl text-orange-600 mr-[-50px]' /></span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-red-600 h-2.5 rounded-full w-[75%]"></div>
                    </div>

                    {/* JS */}
                    <div className="flex justify-between mt-3 mb-3">
                        <span className="text-base font-bold text-zinc-700 dark:text-white">Java Script</span>
                        <span><SiJavascript className='text-2xl text-yellow-500 ml-[-10px]' /></span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">34%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-yellow-500 h-2.5 rounded-full w-[34%]"></div>
                    </div>

                    {/* CSS3 */}
                    <div className="flex justify-between mt-3 mb-3">
                        <span className="text-base font-bold text-zinc-700 dark:text-white">Css3</span>
                        <span><DiCss3 className='text-2xl text-sky-500 mr-[-50px]' /></span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">67%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-sky-500 h-2.5 rounded-full w-[67%]"></div>
                    </div>

                    {/* React JS */}
                    <div className="flex justify-between mt-3 mb-3">
                        <span className="text-base font-bold text-zinc-700 dark:text-white">React JS</span>
                        <span><SiReact className='text-2xl text-blue-500' /></span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">23%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full w-[23%]"></div>
                    </div>

                    {/* Django */}
                    <div className="flex justify-between mt-3 mb-3">
                        <span className="text-base font-bold text-zinc-700 dark:text-white">Django REST</span>
                        <span><SiDjango className='text-2xl text-green-500 ml-[-28px]' /></span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
                        <div className="bg-green-600 h-2.5 rounded-full w-[25%]"></div>
                    </div>
                </div>

                <div className="my__grid md:w-1/2 bg-zinc-100  p-5 md:m-4 mr-5 ml-5 mt-0 mb-5 rounded-xl slide-3">
                    <h1 className='text-center md:text-2xl font-bold'>PROJECTS</h1> 
                    <hr className='border-b-2 border-indigo-400 mb-2 mt-2' />
                    <p className='text-[14px]'>
                        You can list your side projects or open source libraries in this section. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vestibulum et ligula in nunc bibendum fringilla a eu lectus.
                    </p> <hr className='mb-2' />
                    <p className='text-[14px]'>
                        <b>Velocity</b> - A responsive website template designed to help startups promote, market and sell their products.
                    </p> <hr className='mb-2' />
                    <p className='text-[14px]'>
                        <b>DevStudio</b> - A responsive website template designed to help web developers/designers market their services.
                    </p> <hr className='mb-2' />
                    <p className='text-[14px]'>
                        <b>Tempo</b> - A responsive website template designed to help startups promote their products or services and to attract users & investors
                    </p> <hr className='mb-2' />
                    <p className='text-[14px]'>
                        <b>Atom</b> - A comprehensive website template solution for startups/developers to market their mobile apps.
                    </p> <hr className='mb-2' />
                    <p className='text-[14px]'>
                        <b>Delta</b> - A responsive Bootstrap one page theme designed to help app developers promote their mobile apps
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default My__Skills