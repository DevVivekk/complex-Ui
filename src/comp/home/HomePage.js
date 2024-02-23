import React from 'react'
import './homePage.scss'
import { CiCircleCheck } from "react-icons/ci";
import { SlInfo } from "react-icons/sl";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const HomePage = () => {
  return (
    <div className='home-page-comp'>
        <h1>Best Website builders in the US</h1>
      <div className='row-border'>
        <section><CiCircleCheck size={'1.5rem'} />&ensp;<span>Last Updated- February 22, 2020 &ensp; &ensp;</span></section>
        <section><SlInfo size={'1.5rem'} />&ensp;<span>Advertising disclosure</span></section>
        <span className='single-elem'>
        <section><span>Top Relevant </span><MdOutlineKeyboardArrowDown size={'1.5rem'} /></section>
        </span>
      </div>
      <div className='home-services'>
        <span>Tools</span>
        <div>
        <span>AWS Builder</span>
        <span>Start Build</span>
        <span>Build Suppspanes</span>
        <span>Toospanng</span>
        <span>BlueHosting</span>
        </div>
        </div>
      <div className='breadcumbs'>
        <span><span>Home </span><MdKeyboardArrowRight size={'1.9rem'} /></span> &ensp; &ensp;
        <span><span>Hositng for all</span><MdKeyboardArrowRight size={'1.9rem'} /></span> &ensp; &ensp;
        <span><span>Hosting </span><MdKeyboardArrowRight size={'1.9rem'} /></span> &ensp; &ensp;
        <span><span>Hosting6</span><MdKeyboardArrowRight size={'1.9rem'} /></span> &ensp; &ensp;
        <span><span>Hosting5</span></span> &ensp; &ensp;
      </div>
    </div>
  )
}

export default HomePage