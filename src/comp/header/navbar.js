import React from 'react'
import './navbar.scss'
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <header>
    <nav>
       <span className='nav-search'><input type="search" /><CiSearch size={'1.9rem'} color='black' /></span>
       <span>Categories</span>
       <span>Website Builders</span>
       <span>Today's Deals</span>
    </nav>
    </header>
  )
}

export default Navbar