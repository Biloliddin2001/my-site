import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
// import Images from '../assets/1.jpg'
import { Navigate, useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export default class Portfolio extends Component {
    state = {
        count: 0,
    }
 
    Dec = () => {
        this.setState({ count: this.state.count - 1})
    }
    Inc = () => {
        this.setState({ count: this.state.count + 1})
    }
    
    render() {
        return (
        <>
        <Navbar />
            <div className="mt-5">
              <div className="image__carousel m-10">

              </div>
              <div className="btns ml-10">
                <button className="text-2xl bg-indigo-500 hover:text-black px-6 pb-[13px] py-3" onClick={ this.Dec }>Previos</button> 
                <span className='pl-10 text-4xl'>{ this.state.count }</span>
                <button className="text-2xl bg-indigo-500 hover:text-black px-6 pb-[13px] py-3 ml-[200px]" onClick={ this.Inc }>Next</button>
              </div>
            </div>
        </>
    )
  }
}
