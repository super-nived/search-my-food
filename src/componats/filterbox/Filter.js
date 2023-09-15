import React, { useState, useEffect, useContext } from 'react'
import './Filter.css'

import { ProductContext } from '../../store/firebaseContext'
import { FirebaseContext } from '../../store/firebaseContext'
import { SearchContex } from '../../store/firebaseContext'
import { CategorySearchContext } from '../../store/firebaseContext'
import Category from '../product-category/Category'


function Filter() {


  const { productData, setProductData } = useContext(ProductContext)
  const { firebase } = useContext(FirebaseContext)

  const [cat, setCat] = useState()
  const [disti, setDistri] = useState()
  const [fud, setFud] = useState()
  const [city, setCity] = useState()
  const [fil, setFil] = useState([])
  
  const [filterBoxStatus,setFilterBoxStatus] = useState(false)

  useEffect(() => {

    firebase.firestore().collection('products').get().then((results) => {
      const allPost = results.docs.map((product) => {
        return (

          { ...product.data(), product, id: product.id }

        )

      })
      setFil(allPost)
    })
    return () => {

    }
  }, [])

  const filterFunction = () => {
    const newProduct = fil && fil.filter((data) =>
      (fud ? (data.food && data.food.includes(fud.toLowerCase())) : data.food.includes('')) &&
      (disti ? (data.district && data.district.includes(disti.toLowerCase())) : data.district.includes('')) &&
      (city ? (data.city && data.city.includes(city.toLowerCase())) : data.city.includes('')) &&
      (cat ? (data.category && data.category.includes(cat.toLowerCase())) : data.category.includes(''))
    );

    setProductData(newProduct);
    console.log(newProduct, 'newwww');
    setFilterBoxStatus(!filterBoxStatus)
  };


  return (
    <div>
    <div className='filter-header'>    
    <h4>filter & category</h4>
    <div className="viewAll">
      <p className='fiter-btn-icon' onClick={()=>setFilterBoxStatus(!filterBoxStatus)}>filter </p>
    </div> </div>
    <div  className={filterBoxStatus ? 'filter-main' : 'filter-main filterboxhide'} >
      <div className="filter-container">
        <div className='filter-input-box'>
          <input type='text' id='input' placeholder='category' autoComplete='off' onChange={(e) => setCat(e.target.value)}></input>
          <span id='suggestion'></span>
        </div>

        <div className='filter-input-box'>
          <input type='text' placeholder='city.' id='input' autoComplete='off' onChange={(e) => setCity(e.target.value)}></input>
          <span id='suggestion'></span>
        </div>


        <div className='filter-input-box'>
          <input type='text' placeholder='food..' id='input' autoComplete='off' onChange={(e) => setFud(e.target.value)}></input>
          <span id='suggestion'></span>
        </div>


        <div className='filter-input-box'>
          <input type='text' placeholder='distict..' id='input' autoComplete='off' onChange={(e) => setDistri(e.target.value)}></input>
          <span id='suggestion'></span>
        </div>


        <div className="filter-btn">
          <div className='fiter-h4'><h5 className='m-0' onClick={() => {filterFunction()}}>filter</h5></div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Filter