import React from 'react'
import { NavLink } from "react-router-dom"


function Vehicles() {
  return (
    <div>
        <div className='bg-red-300'>
            <div className=' text-normal ml-32 pt-10 font-medium absolute'>
            <h1 className='text-4xl '>Vehicles</h1>
            <p className=' pt-10 hover:text-blue-700'><a href='https://www.mbusa.com/en/special-offers'>Special offers</a></p>
            <p className=' py-3 hover:text-blue-700'><a href=''>Compare Vehicles</a></p>
            <p className='hover:text-blue-700'><a href=''>Mercedes-AMG</a></p>
            <p className='py-3 hover:text-blue-700'><a href=''>Certified Pre-Owned</a></p>
            <p className='hover:text-blue-700'><a href=''>Mercedes-EQ</a></p>
            <p className='py-3 hover:text-blue-700'><a href=''>All Vehicles</a></p>
            </div>
            <div className=' absolute ml-96'>
                <div className='text-normal pt-10 pb-1 font-medium flex space-x-11 border-b-2 border-black'>
                    
                    <h1 className='hover:text-blue-700 hover:underline underline-offset-8 decoration-2'>SUVs</h1>
                    <h1 className='hover:text-blue-700 hover:underline underline-offset-8 decoration-2'>Sedans & Wagons</h1>
                    <h1 className='hover:text-blue-700 hover:underline underline-offset-8 decoration-2'>Coupes</h1>
                    <h1 className='hover:text-blue-700 hover:underline underline-offset-8 decoration-2'>Convertibles & Roadsters</h1>
                    <h1 className='hover:text-blue-700 hover:underline underline-offset-8 decoration-2'>Electric</h1>
                    <h1 className='hover:text-blue-700 hover:underline underline-offset-8 decoration-2'>Future & Concept</h1>
                </div>
                <h1 className='font-bold pt-5'>SUVs</h1>

                <div className='pt-5  absolute flex flex-wrap gap-7'>
                 <div className=''>
                  <img className='w-64' src='images/suv1.jpg'/>
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>GLA SUV</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>Models </p>
                 </div>

                 <div className=''>
                  <img className='w-64' src='images/suv2.jpg'/>
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>GLB SUV</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>Models </p>
                 </div>

                 <div className=' '>
                  <img className='w-64' src='images/suv3.jpg'/>
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>GLA SUV</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>Models </p>
                 </div>

                 <div className=' '>
                  <img className='w-64' src='images/suv4.jpg'/>
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>GLA SUV</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>Models </p>
                 </div>

                 <div className=' '>
                  <img className='w-64' src='images/suv5.jpg'/>
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>GLA SUV</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>Models </p>
                 </div>

                 <div className=' '>
                  <img className='w-64' src='images/suv6.jpg'/>
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>GLA SUV</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>Models </p>
                 </div>

                 <div className=' '>
                  <img className='w-64' src='images/suv7.jpg'/>
                  <h1 className='pt-6 text-center text-lg hover:text-blue-600'>GLA SUV</h1>
                  <p className='pt-3 text-center text-gray-700 text-sm'>Starting at $36,400 *</p>
                  <p className='pt-3 text-center text-blue-700'>Models </p>
                 </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default Vehicles