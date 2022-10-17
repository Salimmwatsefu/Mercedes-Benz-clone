import React from 'react';
import { BiMap } from "react-icons/bi";


function Navbar() {
  return (
    <div className='flex flex-wrap relative justify-between'>
        <div className='flex flex-wrap gap-2 ml-10 pl-10 pt-5'>
        <div><img className='inline max-h-10' src={"images/benz.png"}/></div>
             <div >
               <ul className='flex gap-10 text-opacity-300 font-bold pb-4 text-sm ml-10 pt-5 '>
                <li className=' hover:text-blue-500'> <a>VEHICLES</a></li>
                <li className=' hover:text-blue-500'> <a>SHOPPING</a></li>
                <li className=' hover:text-blue-500'> <a>INVENTORY</a></li>
                <li className=' ml-96 text-sm' icon={<BiMap/>}><a><BiMap/>Find a dealer</a></li>
               </ul>
               
               </div>
        </div>
    </div>
  )
  
}

export default Navbar