import React from 'react'
import styles from './page.module.scss'
import Navbar from '@/comp/header/navbar'
import HomePage from '@/comp/home/HomePage'
import Featurediv from '@/comp/featured/Featurediv'
import AnotherFeaturediv from '@/comp/featured/AnotherFeatured'
import Deals from '@/comp/deals/Deals'
import Signup from '@/comp/signup/signup'
import Footer from '@/comp/footer/Footer'
const Page = () => {
  return (
    <div className={styles['home-page']}>
    <Navbar />
    <HomePage />
    <Featurediv index={1} info={"yes"} infoValue={"Best Choice"}  rating={9.8} greeting={"Exceptional"} />
    <Featurediv index={2} info={"yes"} infoValue={"Best Value"} rating={9.5} greeting={"Excellent"} />
    <Featurediv index={3} info={false} infoValue={null} rating={9.3} greeting={"Exceptional"} />
    <AnotherFeaturediv index={4} info={false}  infoValue={null}  rating={9.1} greeting={"Very Good"} />
    <Deals />
    <Signup />
    <Footer />
    </div>
  )
}

export default Page