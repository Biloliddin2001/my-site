import React from 'react'
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom'


const Signup = () => {
    return (
        <>
            <Navbar />
            <h1 className='text-center md:mt-7 mt-5 md:text-3xl text-2xl font-bold'>Sign In Page</h1>
           <div className="my__form flex justify-center md:p-10 p-5 drop-shadow-xl slide-2">
            <form className="w-full max-w-lg bg-zinc-100 md:p-10 pt-7 pb-7 pl-4 pr-4 rounded-md -z-50">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter your name" />
                            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter your LastName" />
                        </div>
                    </div>

                    {/* Password and Confirm Password */}
                    <div className="flex flex-wrap -mx-3 mb-3">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                Password
                            </label>
                            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="**********" />
                            {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-full px-3 mb-2 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                Password Confirm
                            </label>
                            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="password" placeholder="**********" />
                        </div>
                    <div className="w-full md:w-1/3 px-3 mb-2 md:mb-0">
                    </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-wrap -mx-3 mb-2 md:mt-5">
                        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                Email
                            </label>
                            <input required className="appearance-none block w-full bg-gray-200 text-gray-700 border border-indigo-600 
                                    rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                id="grid-city" type="email" placeholder="example@gmail.com" />
                        </div>
                    </div>

                    <div className="my__button md:mt-3">
                        <button className='w-full h-[45px] rounded-md border border-indigo-500 bg-indigo-600 text-white hover:bg-transparent hover:text-black transition'>
                            <Link to="#">Sign Up</Link>
                        </button>
                        <button className='w-full h-[45px] rounded-md border border-indigo-500 text-black transition hover:bg-indigo-600 hover:text-white mt-2'>
                            <Link to="/login">Login</Link>
                        </button>
                    </div>
                </form>
           </div>
        </>
    )
}
export default Signup