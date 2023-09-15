import React,{useContext} from 'react'
import './ProductContainer.css'
import {FaUserTie} from 'react-icons/fa'
import {BsPlusCircleFill} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Product({data}) {
  const [vistiStatus,setVisitStatus] = useState(false)
  return ( 


    <article className='team-member'>
    <div className="team-memeber-image">
        <img src={data.foodImage} alt="" />
    </div>
    <div className="team-member-info">
        <h4>{data.food}</h4>
        <p>$ {data.phone}</p>
        <p style={{fontSize:'14px'}}>@{data && data.city.slice(0,30)}#{data && data.area.slice(0,30)}</p>
        
    </div>
    <div className='team-member-socials'>
      <Link to={'/sponser'}> <a href='#' ><FaUserTie/></a> </Link> 
        <a href='#'><BsPlusCircleFill/></a>
        <a href='#'>{vistiStatus ? <small onClick={()=>setVisitStatus(!vistiStatus)}>{data && data.visit }</small>  : <AiFillEye onClick={()=>setVisitStatus(!vistiStatus)}/>}</a>
    </div>
</article>

  )
}

export default Product