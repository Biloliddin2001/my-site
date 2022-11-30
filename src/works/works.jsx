import React from 'react'
import Navbar from '../navbar/navbar'

const Works = () => {
    return (
        <>
            <Navbar />
            <div className="my__works slide-up md:absolute border-2 border-indigo-500 md:p-5 md:top-0 md:right-0 md:h-[98vh] md:w-[1028px] m-3">
                <h1 className='text-3xl text-white'>My Works</h1>
           </div>
        </>
    )
}

export default Works