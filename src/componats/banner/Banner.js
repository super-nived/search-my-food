import React from 'react'
import './Banner.css'
import  OFFER from '../../assets/offer.png'

function Banner() {


  return (
    <div id='banner' className="bannerContent" >
      <div className='offer_container' >
      <h3 >search my food </h3>
       <p>
        Get free  for every {" "}
       day
      </p>
      <a  onClick={()=>{alert('it will be available soon')}}>gift</a>
     </div>
    </div>
  )
}

export default Banner