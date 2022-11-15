import React from 'react';
import Navbar from '../navbar/Navbar'


const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-page w-full mt-3 flex md:flex-col flex-col">
                <h2 className='md:ml-[30px] text-[40px] ml-3 md:text-[100px] font-bold slide-one md:mt-0'>O1</h2>
                <p className='md:w-1/2 md:pl-[14px] m-3 md:pt-8 slide-two'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae perferendis cumque est animi, dicta dolore error repudiandae itaque iste enim earum aliquid quisquam, quibusdam sed quia corporis impedit accusamus! Minus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui saepe sequi iste animi quae doloribus ut repellendus voluptas explicabo ea quibusdam eaque molestias placeat eum laborum mollitia, iure at!
                </p>
                <div className="line md:ml-[30px] md:h-[28px] md:mt-3 ml-[15px] md:w-[200px] bg-black w-[150px] h-[15px] slide-two"></div>
                <h1 className='md:text-[80px] md:ml-[30px] font-bold text-[38px] ml-3 mt-2 slide-three'>We dwelling elegance do shutters appetide yourself diverted.</h1>
            </div>
        </>
    )
}
export default Home
