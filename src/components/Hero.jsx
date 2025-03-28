import React, { useRef, useEffect } from 'react'
import { Typed } from 'react-typed'

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js manually if it's not working as expected
    if (typedRef.current) {
      new Typed(typedRef.current, {
        strings: ['BTB', 'BTC', 'SASS'],
        typedSpeed: 120,
        backSpeed: 140,
        loop:Infinity
      });
    }
  }, []);

  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl'>Grow with data</h1>
            <div className='flex justify-center items-center '>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                <span ref={typedRef} className="md:text-5xl sm:text-4xl text-xl font-bold"></span>
            </div>
            <p className='md:text-2xl text:xl font:bold text-gray-500'>Monitor your data analytics to increase revenue for BTB,BTC,& SASS Platforms</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto   py-3  text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
