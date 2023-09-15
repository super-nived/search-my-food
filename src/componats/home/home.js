import React from 'react';
import './home.css';

import { useState, useEffect, useContext } from 'react';
import BIKE from '../../assets/search.png'
import Header from '../header/Header';
import Category from '../product-category/Category';
import Prodctucategorylist from '../productcategorylist/Prodctucategorylist';
import Banner from '../banner/Banner';
import Productdetail from '../product-detail/Productdetail';
import Prodcuts from '../Products/Prodcuts';
import { ItemsList } from '../../store/firebaseContext';
import { FirebaseContext } from '../../store/firebaseContext';
import { ProductContext } from '../../store/firebaseContext';
import Threenav from '../3dnav/threenav';
import { ProdcutsDetailContext } from '../../store/firebaseContext'
import FOOD from '../../assets/foodLogo.jpg'
import Filter from '../filterbox/Filter';
import ProduContainer from '../productList/ProductContainer';
function Home() {
  const { firebase } = useContext(FirebaseContext)
  const { productData, setProductData } = useContext(ProductContext)
  const { Item, setItem } = useContext(ItemsList)
  const { detail, HideDeatail, setHideDetail, setProductDetail } = useContext(ProdcutsDetailContext)

  // bannerimagechange setup

  const style = {
    backgroundImage: `url(${FOOD})`,

  }

  // bannerimagechange setup

  useEffect(() => {





    // product category active setup
    const product_category = document.querySelector('.product-category').querySelectorAll('.category-row')


    product_category.forEach((n) => n.addEventListener("click", setMenuCardActive));

    function setMenuCardActive() {
      product_category.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");

    }

    // product category active setup

    //  //

    return () => {

    }
  }, [])





  return (


    <div className="App">
      {/* header section */}
      <Header></Header>
      {/*header section */}

      {/* main section */}
      <div className='main'>

        {/* main-left */}
        <div className='main-left'>
          {/* bannersection */}
          <div className="banner" style={style}>
            <Banner name={"super"} discount={"20"} link={"#"}></Banner>
            <img className='banner-image' src={BIKE} alt="" />
          </div>
          {/* bannersection */}


          {/* product-container */}
          <div className='product-container'>
            <div>
              <Filter></Filter>
            </div>

            <Category />
            <div className="product-list">
              
            </div>

            <ProduContainer></ProduContainer>
          </div>
          {/* product-container */}
        </div>
        {/* main-left */}

        {/* main-right */}
        <div className={HideDeatail ? `main-right ${'primary'}` : 'main-right'}>
          <div className='product-detail-container '>
            <div className="product-detail">
              <Productdetail></Productdetail>
            </div>
          </div>
          <div
            onClick={() => { setHideDetail(!detail) }}
            className='close-button bg-success pt-1'>
            <h6>tap to home</h6>
          </div>
        </div>
        {/* main-right */}
      </div>
      {/* end main section */}

      {/* bottom-nav */}
      <div className='bottom-nav'>
        <Threenav></Threenav>
      </div>
      {/* bottom-nav */}
    </div>


  );
}

export default Home;
