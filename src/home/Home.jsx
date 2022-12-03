import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';
import Works from '../works/works';



const Home = () => {
    return (
        <>
          <Navbar />
          <div className="flex justify-center w-[98%] md:h-[80vh] items-center home_page border-2 border-amber-400 md:m-3 m-auto">
            <h1>Home Page</h1>
          </div>
          <Footer />
        </>
    )
}
export default Home
