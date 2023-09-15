import React from 'react'
import { useState, useEffect, useContext } from 'react'
import './Category.css'
import { ProductContext } from '../../store/firebaseContext'
import { FirebaseContext } from '../../store/firebaseContext'
import { SearchContex } from '../../store/firebaseContext'
import { CategorySearchContext } from '../../store/firebaseContext'
import { PageCheckContext } from '../../store/firebaseContext'
import VEG from '../../assets/veg.png'
import NON_VEG from '../../assets/chicken.png'
import DRINKS from '../../assets/bottle.png'
import FRUITS from '../../assets/fruit.png'
import VEGITABLE from '../../assets/veg.png'
import OTHER from '../../assets/other.png'

function Category() {


    const { productData, setProductData } = useContext(ProductContext)
    const { firebase } = useContext(FirebaseContext)






    function Cat(category) {


        firebase.firestore().collection('products').get().then((results) => {
            const allPost = results.docs.map((product) => {
                return (

                    { ...product.data(), product, id: product.id }

                )

            })

            const newProductList = allPost.filter(data => data.category == category)
            console.log(newProductList, 'cateory')

            setProductData(newProductList)

        })


    }




    return (

        <div className="product-category">

            <div onClick={() => { Cat('vegetarian') }} className='category-row'>
                <div className="imagebox">
                    <img src={VEG} />
                </div>
                <h3>vegetarian</h3>
            </div>

            <div onClick={() => { Cat('non-vegetarian') }} className='category-row'>
                <div className="imagebox">
                    <img src={NON_VEG} />
                </div>
                <h3>non-veg</h3>
            </div>




            <div onClick={() => { Cat('drinks') }} className='category-row'>
                <div className="imagebox">
                    <img src={DRINKS} />
                </div>
                <h3>drinks</h3>
            </div>


            <div onClick={() => { Cat('fruits') }} className='category-row'>
                <div className="imagebox">
                    <img src={FRUITS} />
                </div>
                <h3>fruits</h3>
            </div>

            <div onClick={() => { Cat('vegetables') }} className='category-row'>
                <div className="imagebox">
                    <img src={VEGITABLE} />
                </div>
                <h3>vegetables</h3>
            </div>

            <div onClick={() => { Cat('others') }} className='category-row'>
                <div className="imagebox">
                    <img src={OTHER} />
                </div>
                <h3>others</h3>
            </div>


        </div>
    )
}

export default Category