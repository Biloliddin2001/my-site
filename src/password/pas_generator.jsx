import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/navbar'

const Pass_Generator = () => {

    function Error() {
        const btn__generate = document.getElementById('btn__generate');
        const input__generate = document.getElementById('input__generate');
        btn__generate.addEventListener('click', () => {
            input__generate.value = GeneratePassword(8);
        });

        function GeneratePassword( length = 8 ) {
            let charsets = 'qwertyuiop[]asdfghjklQWERTYUIOPLKJHGFDSAZXCVBNM1234567890@#$%&*+-';
            let password = '';

            for(let i = 0; i < length; ++i ){
                let at = Math.floor(Math.random() * (charsets.length + 1));
                password += charsets.charAt(at);
                
            } return password
        }
    }
    
    return (
        <>  
            <Navbar /> 
            <div className="containerr w-full slide-2 md:h-[80vh] h-[60vh] flex justify-center p-2 flex-col items-center">
                <h1 className='text-2xl font-bold p-2'>Password Generator</h1>      
                <div className="divv flex justify-between">
                    <input id='input__generate' type="text" className='pl-3 border-2 border-indigo-500 mt-4 h-[40px] md:h-[50px] md:w-[400px] rounded-md md:text-2xl text-1xl w-[200px]' disabled/>
                    <button onClick={ Error } id='btn__generate' className='border border-indigo-500 w-[100px] md:w-[180px] mt-4 ml-2 bg-indigo-500 text-white rounded-md hover:bg-transparent hover:text-black transition'>Generate</button>
                </div>
            </div>
        </>
    )
}
export default Pass_Generator;