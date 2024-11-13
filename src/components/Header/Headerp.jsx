import React from 'react'
import "../../index.css"
import cv from '../../assets/cv.pdf'
const Headerp = () => {
  return (
   <>
   <div className='headerp'>
    <a href={cv} download className="btn">Download CV</a>
    <a href='#contact' className="btn btnpr">Let's Talk</a>
   </div>
   </>
  )
}

export default Headerp