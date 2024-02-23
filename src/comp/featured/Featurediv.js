import React from 'react'
import Image from 'next/image'
import '../featured/featureddiv.scss'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiTrophy } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";
const Featurediv = ({index,info,infoValue,greeting,rating}) => {
  return (
    <div className='featured'>
        <div className='featured-image'>
        <div className='f-one'>
        {info&&info==="yes"?<div>{index===2?<IoDiamondOutline size={'1.9rem'} />:<CiTrophy size={'1.9rem'} />}<h3>{infoValue}</h3><br /></div>:null}
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
        </div>
        <div className='main-para'>
            <h2>Main highlights</h2>
            <p>[what you get]: Receive the WixPro website builder suite, access to premium design templates and extensive library of widgets and apps and detailed step-by-step guidelines.</p>
            <span>Show More <MdOutlineKeyboardArrowDown size={'1.5rem'} /></span>
        </div>
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

export default Featurediv