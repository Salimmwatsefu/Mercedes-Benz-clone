import React from 'react'
import { IoCarSportOutline, IoBuildSharp, IoGameControllerOutline, IoDiamondOutline } from "react-icons/io5";

function Home() {
  return (
    <div>
        <div style={{ backgroundImage: "url(/images/home.jpg)"}} className="min-h-screen bg-fixed bg-cover bg-center">
            <div className='pt-10 pl-12'>
            <div className='ml-12 bg-slate-50/[0.7] w-5/12 h-60'>
                <p className='pt-8 pl-5 font-medium text-4xl '>S-Class luxury. Pure <br/>electricity</p>
                <p className='pl-5 pt-3 text-sm font-medium'>The all-electric 2023 EQS SUV from Mercedes-Benz</p>
                <p className='pl-5 pt-5'><button className='bg-blue-700 px-7 py-1.5 text-white font-bold text-sm rounded-sm hover:bg-blue-600'>Learn More</button></p>
            </div>
            </div>

        </div>
        <div style={{ backgroundImage: "url(/images/home2.jpg)"}}  className="min-h-screen bg-cover bg-center">
            <div className='flex justify-center pt-28'>
                <div className='ml-12 bg-zinc-900/[0.7] w-6/12 h-44 text-white'>
                    
                    <h1 className=' text-xs justify-center flex pt-8'>CHOOSE YOURS</h1>
                    <p className=' font-bold text-5xl justify-center flex pt-3'>GLB or EQB?</p>
                    <p className='justify-center flex pt-2 font-medium'>In the world of luxury SUVs, is electric right for you?</p>
                </div>
            </div>
            <div className='flex justify-center pt-60 '>
                    <div className="bg-zinc-900/[0.7] w-4/5 h-36 relative">
                        <div className='w-1/4 text-white pt-5 pl-10 absolute'>
                            <h1 className='text-sm'>Mercedes-Benz</h1>
                            <p className='font-semibold text-4xl'>GLB SUV</p>
                        </div>
                        <div className=' pt-10 flex justify-center text-white text-sm absolute pl-96'>
                            <h1 className=''>
                                <span className=''>Acceleration</span>
                                <p className='pt-2 font-bold text-xl'>6.9<span className='font-normal pl-1 text-sm'>sec</span></p>
                            </h1>

                            <h1 className=' px-9'>
                                <span className=''>Power</span>
                                <p className='pt-2 font-bold text-xl'>221<span className='font-normal pl-1 text-sm'>hp</span></p>
                            </h1>

                            <h1 className=''>
                                <span className=''>Torque</span>
                                <p className='pt-2 font-bold text-xl'>258<span className='font-normal pl-1 text-sm'>lb-ft</span></p>
                            </h1>
                        </div>
                        <div className=' pl-80 ml-40 absolute pt-14'>
                            <p className='pl-96 ml-10 font-semibold text-sm'>
                                <button className='bg-white rounded-sm px-6 py-1 hover:bg-gray-400'>Learn More</button>
                                <h1 className='text-xs text-white pt-10 pl-10'>GLB 250 SUV</h1>
                            </p>
                        </div>

                    </div>
                </div>
        </div>
        <div>
        
            <div className='flex justify-center bg-white min-h-screen'>
                {/*Shopping tools text */}
                <div className='flex justify-center absolute pt-24 '>
                    <h1 className='text-gray-500 text-sm font-bold '>SHOPPING TOOLS</h1>
                </div>

            <div style={{ backgroundImage: "url(/images/s1.jpg)"}} className=" bg-center bg-cover pt-10 h-100vh w-40 bg-no-repeat mt-36 mb-10 hover:scale-105 ease-in duration-500">
                <button className='text-white pt-72 px-12 hover:scale-90 ease-in duration-500 text-sm'>
                    <IoCarSportOutline className='text-7xl px-2'/>
                    ALL <br/> VEHICLES
                    </button>
            </div>
            <div style={{ backgroundImage: "url(/images/s2.jpg)"}} className=" pt-10 h-100vh w-40 bg-cover bg-no-repeat mt-36 mx-6 mb-10 hover:scale-105 ease-in duration-500">
            <button className='text-white pt-72 px-12 hover:scale-90 ease-in duration-500 text-sm'>
                    <IoBuildSharp className='text-7xl px-2 text-white/[0.8]'/>
                    BUILD <br/>YOURS
                    </button>
            </div>
            <div style={{ backgroundImage: "url(/images/s3.jpg)"}} className="  pt-10 h-100vh bg-cover w-40 bg-no-repeat mt-36 mr-5 mb-10 hover:scale-105 ease-in duration-500">
            <button className='text-white pt-72 px-12 hover:scale-90 ease-in duration-500 text-sm'>
                    <IoGameControllerOutline className='text-7xl px-2'/>
                    SPECIAL <br/> OFFERS
                    </button>
            </div>
            <div style={{ backgroundImage: "url(/images/s4.jpg)"}} className=" bg-center bg-cover pt-10 h-100vh w-40 bg-no-repeat mt-36 mb-10 hover:scale-105 ease-in duration-500">
            <button className='text-white pt-72 px-12 hover:scale-90 ease-in duration-500 text-sm'>
                    <IoDiamondOutline className='text-7xl px-2'/>
                    VIEW <br/> INVENTORY
                    </button>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Home