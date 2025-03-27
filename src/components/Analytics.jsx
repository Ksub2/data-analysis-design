import React from 'react'
import Laptop from '../assets/laptop.jpg';
function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'></div>
        <img className='w-[500px] mx-auto my-4 'src={Laptop}alt='/'/>
        <div className='flex flex-col justify-center'>
            <p className=' text-green-500 font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p>Managing data analytics centrally means consolidating data collection, processing, and reporting into a unified system. This approach ensures consistency, improves data accuracy, and enhances decision-making by providing a single source of truth. It also strengthens security, simplifies compliance, and allows for better resource allocation. By centralizing analytics, organizations can reduce redundancy, improve collaboration across departments, and gain deeper insights from their data.
            </p>
            <button className='text-green-500 w-[200px] rounded-md font-medium  my-6 mx-auto md:mx-0 py-3 bg-black'>Get Started</button>
        </div>
      
    </div>
  )
}

export default Analytics
