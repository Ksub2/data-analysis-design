import React from 'react'
import { FaDribbble,FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8  text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Data Analysis</h1>
            <p className='py-4 '>Data Analysis is the process of examining, cleaning, transforming, and interpreting data to extract useful insights, identify patterns, and support decision-making. It involves various techniques and tools to summarize data, find relationships, and make predictions.

            </p>
            <div className='flex md:w-[75%] my-6 justify-between'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbble size={30}/>
            </div>
        </div>
        <div className='col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>
                        Analytics
                    </li>
                    <li className='py-2 text-sm'>
                        Marketing
                    </li>
                    <li className='py-2 text-sm'>
                        Commerce
                    </li>
                    <li className='py-2 text-sm'>
                        Insights
                    </li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>
                        Pricing
                    </li>
                    <li className='py-2 text-sm'>
                        Documentation
                    </li>
                    <li className='py-2 text-sm'>
                        Guides
                    </li>
                    <li className='py-2 text-sm'>
                        Status
                    </li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>
                        About
                    </li>
                    <li className='py-2 text-sm'>
                        Blog
                    </li>
                    <li className='py-2 text-sm'>
                        Jobs
                    </li>
                    <li className='py-2 text-sm'>
                        Careers
                    </li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>
                        Claim
                    </li>
                    <li className='py-2 text-sm'>
                        Policy
                    </li>
                    <li className='py-2 text-sm'>
                        Terms
                    </li>
                    <li className='py-2 text-sm'>
                        Careers
                    </li>
                </ul>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
