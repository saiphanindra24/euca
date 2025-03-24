import React, { useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AccountCircle, ShoppingCart } from '@mui/icons-material';
const Navbar = () => {
    const[isLoggedIn, setIsLoggedIn]=useState(
      localStorage.getItem('isLoggedIn') === 'true'
    )
    const [showDropdown, setShowDropdown]=useState(false)
  
  const handleLogout = ()=>{
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }
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
      {isLoggedIn ? (
          <div className="flex space-x-4 items-center">
            {/* Profile Icon */}
            <AccountCircle className="text-white cursor-pointer" fontSize="large" />

            {/* Cart with Dropdown */}
            <div className="relative">
              <ShoppingCart
                className="text-white cursor-pointer"
                fontSize="large"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              />
              {showDropdown && (
                <div
                  className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/orders"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Orders
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <button
            onClick={() => (window.location.href = '/login')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar