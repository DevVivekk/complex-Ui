import React from 'react'
import './footer.scss'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Footer = () => {
  return (
    <div className='footer'>
        <div>
        <ul>
            <li>Categories</li>
            <li>Web builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
        </ul>
        </div>

        <div>
        <ul>
            <li>CONTACT</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Categories</li>
            <li>About</li>
        </ul>
        </div>

        <section><span>Unites States</span><MdOutlineKeyboardArrowDown size={'1.9rem'} /></section>
    </div>
  )
}

export default Footer