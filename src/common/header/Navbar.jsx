import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      
        <div className='ml-6 font-medium py-4'>
            <ul className="flex space-x-9">
              <li className="text-white hover:text-[#c70fff] transition">
                <Link to='/home'>Home</Link>
              </li>
              <li className="text-white hover:text-[#c70fff] transition">
                <Link to='/user'>Profile</Link>
              </li>
              <li className="text-white hover:text-[#c70fff] transition">
                <Link to='/wishlist'>Wishlist</Link>
              </li>
              <li className="text-white hover:text-[#c70fff] transition">
                <Link to='/contact'>Contact Us</Link>
              </li>
            </ul>
        </div>
    </>
  )
}

export default Navbar
