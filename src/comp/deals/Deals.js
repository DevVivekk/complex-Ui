import React from 'react'
import './deals.scss'
import Dealscomp from './Dealscomp'
const Deals = () => {
  return (
    <div className='deals'>
        <h2>Related Deals you might like for</h2>
        <div className='align-deals'>
        <Dealscomp />
        <Dealscomp />
        <Dealscomp />
        </div>
    </div>
  )
}

export default Deals