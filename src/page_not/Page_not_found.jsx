import React from 'react'
import Navbar from '../navbar/Navbar'


const Page_Not_Found = () => {
    return (
        <>
            <Navbar />
            <div className="page_not flex flex-col  items-center justify-center page-not mt-[70px] md:mt-5">
                <h1 className='md:text-[150px] md:mt-5 text-[50px]  transition hover:text-indigo-500'>404</h1>
                <h3 className='md:text-[60px] text-[30px] ml-[15px] hover:text-indigo-500'>Sorry, Page Not Found</h3>
            </div>
        </>
    )
}
export default Page_Not_Found