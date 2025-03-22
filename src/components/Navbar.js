import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-lg py-4 mb-5 mr-4 ml-4 border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt=""/>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink>
          <li className='py-1'>Eucalyptus Leaves</li>
          <hr />
        </NavLink>
        <NavLink>
          <li className='py-1'>Dried Eucalyptus</li>
        </NavLink>
        <NavLink>
          <li className='py-1'>Eucalyptus Products</li>
        </NavLink>
        <NavLink>
          <li className='py-1'>Premium Products</li>
        </NavLink>
        <NavLink>
          <li className='py-1'>Nature Treasures</li>
        </NavLink>
        <NavLink>
          <li className='py-1'>Organic Collection</li>
        </NavLink>
      </ul>
      <div>
        <button className='bg-black text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
      </div>
    </div>
  )
}

export default Navbar