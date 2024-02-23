import Image from 'next/image'
import React from 'react'

const Dealscomp = () => {
  return (
    <div className='deals-div'>
    <div className='deals-image'><Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='lazy' fill style={{objectPosition:"center",objectFit:"contain"}} alt='imager' src={'/img.png'} /></div>
    <div>
        <span>20% Off</span>
        <span>Limited Time</span>
    </div>
    <b>Webuilder 1</b>
    <p>Computer modern classic with wix support</p>
    <div className='price-comp'>
    <span>$39.96</span>
    <span>$49.96</span>
    <span>(20% Off)</span>
    </div>
    <button>View deal</button>
</div>
  )
}

export default Dealscomp