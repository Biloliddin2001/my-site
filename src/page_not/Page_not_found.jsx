import React from 'react'
import { Link } from 'react-router-dom';


const Page_Not_Found = () => {
    return (
        <>
            <div className="page_not flex flex-col  items-center justify-center page-not mt-[70px] md:mt-5">
                <h1 className='md:text-[150px] md:mt-5 text-[50px]  transition hover:text-indigo-500'>404</h1>
                <h3 className='md:text-[60px] text-[30px] ml-[15px] hover:text-indigo-500'>Sorry, Page Not Found</h3>
                <div className="flex justify-center mt-3">
                    <button className='border-2 border-indigo-500 bg-indigo-500 hover:bg-transparent transition  md:py-3 md:px-5 py-2 px-4 md:rounded-md rounded-md md:text-2xl'>
                        <Link to="/" className='transitions text-black'>Back to Home</Link>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Page_Not_Found