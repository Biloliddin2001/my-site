import React from 'react'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'

const Login = () => {
    const login = document.getElementById('login')
    const signin = document.getElementById('signin');

    function Login() {
        login.addEventListener('click', () => {
            alert('No Internet Connection!')
        })
    }
    
    return (
        <>
            <Navbar />
            <h1 className='text-2xl md:text-3xl md:pt-5 text-center mt-4 mb-4 font-bold'>Login Page</h1>
            <div className="my__login slide-2 flex justify-center mt-3 p-2 drop-shadow-xl">
                <div className="login__card w-[95%] md:w-[45%] h-auto bg-zinc-100 p-3 md:p-8 rounded-xl">
                    <label className='text-[18px]' htmlFor="username">UserName</label>
                    <input className='block mt-2 mb-5 p-2 text-[20px] border rounded-md border-indigo-500 focus:outline-none h-[50px]
                             w-full focus:border-indigo-500 focus:rounded-md' type="text" placeholder='Enter your username' />
                    <label className='text-[18px]' htmlFor="username">Password</label>
                    <input className='block mt-2 p-2 text-[20px] border border-indigo-500 rounded-md focus:outline-none h-[50px]
                             w-full focus:border-indigo-500 focus:rounded-md' type="password" placeholder='Enter your password' />
                    
                    <div className="btns mt-4">
                        <button onClick={ Login } id='login' className='w-full h-[45px] bg-indigo-500 text-white rounded-md text-[20px] hover:bg-transparent hover:text-black border border-indigo-500 transition'><Link to="#">Login</Link></button>
                        <button  id='signin' className='w-full h-[45px] border border-indigo-500 mt-3 rounded-md text-[20px] text-black hover:bg-indigo-500 hover:text-white transition'><Link to="/signup">Sign Up</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login