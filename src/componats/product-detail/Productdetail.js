import React, { useState } from 'react'
import './Productdetail.css'
import PIC1 from '../../assets/chicken.png'
import { FirebaseContext } from '../../store/firebaseContext'
import { useContext } from 'react'
import { ProdcutsDetailContext } from '../../store/firebaseContext';


function Productdetail() {
 
const {detail,setProductDetail,HideDeatail,setHideDetail} = useContext(ProdcutsDetailContext)
const {firebase} = useContext(FirebaseContext)
const [spnserImgHIde,setSponserImgHide]  = useState(false)



 

  return (
    <div className='detalis-container'>
      <div className="upper">
        <div className="upper-image">
          <img src={detail.foodImage ? detail.foodImage:PIC1} alt="" />
        </div>
      </div>


      <div className="lower">
      <div class="product-content">
        <h4 class="product-title">{detail.food ? detail.food :'food name'}</h4>
        <hr className='line'></hr>
         <a  class="product-link"> {detail.phone ? ` ${detail.phone}`:'free'}</a>
        <div class="product-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star-half-alt"></i>
          <span>4.7(21)</span>
        </div>

        <div class="product-price">
          <p class="last-price">checked by : <span>{detail.visit ? detail.visit :0} peoples</span></p>
          <p class="new-price">Duration : <span>{(String(detail.date ? detail.date :'  00 / 00 / 0000' ).slice(0,21) )}</span></p>
        </div>
<hr className='line'></hr>
        <div class="product-detail">
          <h5>about this item: </h5>
          <p>{detail.detail ? detail.detail :'about food'}</p>
          <hr className='line'></hr>

          <h6>contact-info</h6>
  
          <h5 className="card-title">
            <a  className='text-center' ><b>{detail.sponserName?detail.sponserName:'sponser'}-</b>  <b>@{detail.house ? detail.house : 'home'} </b>@{detail.area ? detail.area : 'loacl-area' }#{detail.city ? detail.city : 'city'}#{detail.district ? detail.district : 'district'}#{detail.state ? detail.state : 'state'}</a>
            </h5>
        </div>
        <hr className='line'></hr>
        <div class="purchase-info">
   
          <a href={`tel:${detail.phone}`}>
            <button type="button" class="btn btn-primary call-btn bg-success">Call Now</button></a>
        </div>

        {/* <div class="social-links">
          <p>Share At: </p>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-whatsapp"></i>
          </a>
          <a href="#">
            <i class="fab fa-pinterest"></i>
          </a>
        </div> */}


      </div>
      </div>
    </div>
  )
}

export default Productdetail