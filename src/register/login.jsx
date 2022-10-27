import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { AiOutlineUser } from 'react-icons/ai';


const Login = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <>  
            <Navbar />
            <div className="login bg-zinc-100 md:p-10 md:flex md:w-[1140px] md:mt-10 md:mb-0 md:mr-[60px] md:ml-[60px] md:justify-around md:rounded-3xl drop-shadow-2xl
                md:flex-row flex flex-col-reverse mt-5 ml-2 mr-2 slide-home-content
                ">

                <div className="login_create md:border-r-2 md:border-indigo-600 md:w-[600px] mt-5 mb-5 flex md:items-center justify-center md:mr-5 transition hover:scale-105">
                        { !isOpen ? <button onClick={toggle} className='text-white px-6 py-2 mr-5 bg-indigo-500 hover:text-black transition'>Create Account</button> 
                            : <button onClick={toggle} className='px-6 py-2 bg-indigo-500 hover:text-black text-white  transition'>Login</button> 
                        }
                </div>
                
                {/* first Login Page */}
               <div className="content-all">
               { !isOpen &&
                    <div className="forms w-full ml-2 mr-1 pl-5">
                        <h1 className='text-center md:text-4xl font-bold mb-6 text-2xl'>Login Page</h1>
                        <label htmlFor="for" className='md:text-2xl text-md md:ml-6 ml-2'>Username</label>
                            <input type="text" placeholder='Enter your username' className='block md:ml-6 md:mt-2 border-2 rounded-md md:w-[500px] md:h-[50px] w-[300px] h-[40px] hover:border-indigo-500 pl-3'/>
                        <AiOutlineUser className='relative md:top-[-35px] md:right-[-480px] text-xl top-[-30px] right-[-260px] text-md' />

                    <label for="password" className='md:text-2xl text-md md:ml-6 ml-2'>Password</label>
                        <input type="password" placeholder='Enter your password' className='block md:ml-6 md:mt-2 border-2 rounded-md md:w-[500px] md:h-[50px] w-[300px] h-[40px] hover:border-indigo-500 pl-3'/>
                    <AiOutlineUser className='relative md:top-[-35px] md:right-[-480px] text-xl top-[-30px] right-[-260px] text-md' />

                        <input type="checkbox" name="" id="" className='text-2xl ml-[60px] mb-5 my-box-check md:ml-[150px]'/>
                        <label for="checkbox" className='text-md ml-2 '>Remember Password</label><br />
                    <button className='md:ml-7 md:w-[495px] py-3 w-[300px] bg-indigo-500'>Log In</button>
                </div>
                }
                { isOpen &&
                    <div className="forms">
                    <h1 className='text-center md:mt-[-10px] md:text-2xl font-bold text-xl mt-2'>Create Account</h1>
                        <div className="blocks flex flex-col md:flex-row mt-6">
                            <div className="name">
                                <label htmlFor="Name" className='text-md ml-5'>Name</label><br />
                                <input type="text" placeholder='Enter your name' className='border-2 rounded-md w-[300px] h-[40px] hover:border-indigo-500 pl-3 ml-3 mb-3' />
                            </div>
                            <div className="fullname mr-4 mb-2">
                                <label htmlFor="fullname" className='text-md ml-5'>Full Name</label><br />
                                <input type="text" placeholder='Enter your Fullname' className='border-2 rounded-md w-[300px] h-[40px] hover:border-indigo-500 pl-3 ml-3 mb-2'/>
                            </div>
                        </div>
                            <label htmlFor="email" className='text-md ml-5'>Email</label><br />
                            <input type="email" className='border-2 rounded-md  w-[300px] md:w-[610px] h-[40px] hover:border-indigo-500 pl-3 ml-3 mb-2' placeholder='Enter your e-mail'/>

                        <div className="b-password flex flex-col md:flex-row">
                            <div className="name mt-3 mb-3">
                                <label htmlFor="Name" className='text-md  ml-5'>Password</label><br />
                                <input type="password" placeholder='Enter your assword' className=' border-2 rounded-md  w-[300px] h-[40px] hover:border-indigo-500 pl-3 ml-3 mb-2' />
                            </div>
                            <div className="fullname mt-0 mb-3 md:mt-3">
                                <label htmlFor="Name" className='text-md 6 ml-5'>Confirm Password</label><br />
                                <input type="password" placeholder='Enter your confirm password' className='border-2 rounded-md w-[300px] h-[40px] hover:border-indigo-500 pl-3 ml-3 mb-2' />
                            </div>
                        </div>
                    <button className='py-3 w-[298px] bg-indigo-500 ml-4 md:w-[610px]'>Create Account</button>
                </div>
                }
               </div>
               
                
            </div>
        </>
    )
}
export default Login;