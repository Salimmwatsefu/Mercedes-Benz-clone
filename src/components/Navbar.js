import React from 'react';
import { BiMap } from "react-icons/bi";
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className='flex flex-wrap relative justify-between h-20 '>
        <div className='flex flex-wrap gap-2  pl-32 pt-3 fixed bg-black w-full'>
        <div>
          <NavLink to="/">
          <img className='inline max-h-10' src={"images/benz.png"}/>
          </NavLink>
          </div>
             <div >
             <ul className='flex gap-10 text-opacity-300 font-bold pb-4 text-sm ml-10 pt-5 '>
              <NavLink to="vehicles">
                <li className=' hover:text-blue-500'> <a>VEHICLES</a></li>
              </NavLink>
              <NavLink to="shopping">
                <li className=' hover:text-blue-500'> <a>SHOPPING</a></li>
              </NavLink>
              <NavLink to={"inventory"}>
                <li className=' hover:text-blue-500'> <a>INVENTORY</a></li>
              </NavLink>
                <li className=' ml-96 text-sm' icon={<BiMap/>}><a><BiMap/>Find a dealer</a></li>
              </ul>

              </div>
        </div>
    </div>
  )
  
}

export default Navbar