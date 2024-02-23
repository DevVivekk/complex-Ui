import React from 'react'
import Image from 'next/image'
import '../featured/featureddiv.scss'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiTrophy } from "react-icons/ci";
const AnotherFeaturediv = ({index,greeting,rating,info}) => {
  return (
    <div className='featured'>
        <div className='featured-image'>
        <div className='f-one'>
        {info?<div><CiTrophy size={'1.9rem'} /><h3>Best Choice</h3><br /></div>:null}
        <p>{index}</p>
        </div>
        <div className='image-main'>
            <div className='image-div'>
            <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='lazy' fill style={{objectPosition:"center",objectFit:"contain"}} alt='image' src={'/img.png'} />
            </div>
            <span>Builder 1</span>
        </div>
        </div>
        <div className='para'>
        <div className='second-para'>
            <p>WixPro 72-inch Responsive Website Builder- Comprehensive Digital Platform Creation Tool, Stremlined designed interface for professional websites and online stores (black/blue)</p>
            <span>26% Off</span>
        </div>
        <div className='main-para'>
            <h2>Main highlights</h2>
           <div className='extra-info'>
            <div><span>9.9</span><h4>Building Responsive</h4></div>
            <div><span>8.9</span><h4>Building Cool</h4></div>
            <div><span>8.9</span><h4>Building Docs</h4></div>
           </div>
        </div>
           <div className='other-info'>
            <p>Why we love it?</p>
            <ul>
                <li>Documentation</li>
                <li>Easy Use</li>
                <li>Out Of Box</li>
            </ul>
           </div>
            <span>Show More <MdOutlineKeyboardArrowDown size={'1.5rem'} /></span>
        </div>
        <div className='rating-button'>
        <div>
                <span>{rating}</span>
                <span>{greeting}</span>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
        <button>View</button>
        </div>
        </div>
  )
}

export default AnotherFeaturediv