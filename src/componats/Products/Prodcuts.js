import React from 'react'
import { useState, useEffect, useContext } from 'react'
import './Products.css'
import { ProdcutsDetailContext } from '../../store/firebaseContext'
import { FirebaseContext } from '../../store/firebaseContext'
import { ProductContext } from '../../store/firebaseContext'
import { SearchContex } from '../../store/firebaseContext'
import { CategorySearchContext } from '../../store/firebaseContext'
import { Link } from 'react-router-dom'
import SingleProuduct from '../singleproduct copy/SingleProuduct'
function Prodcuts() {

  const { firebase } = useContext(FirebaseContext)
  const { searchItem, setsearchItem } = useContext(SearchContex)
  const { detail, setProductDetail, HideDeatail, setHideDetail } = useContext(ProdcutsDetailContext)
  const { productData, setProductData } = useContext(ProductContext)
  const { categorySerch, setCategoySearch } = useContext(CategorySearchContext)





  useEffect(() => {
    firebase.firestore().collection('products').get().then((results) => {
      const allPost = results.docs.map((product) => {
        return (

          { ...product.data(), product, id: product.id }

        )

      })

      //  setProductData(allPost)

      if (searchItem) {
        setProductData(allPost.filter((data) =>
      data.drug.toLowerCase().includes(searchItem.toLowerCase()) ||
          data.city.toLowerCase().includes(searchItem.toLowerCase()) ||
          data.area.toLowerCase().includes(searchItem.toLowerCase()) ||
          data.district.toLowerCase().includes(searchItem.toLowerCase()) ||

          data.state.toLowerCase().includes(searchItem.toLowerCase()) ||
          data.category.toLowerCase().includes(searchItem.toLowerCase())
        ));
        console.log(searchItem, 'if')
      }
      else {
        console.log(searchItem, 'else')
        setProductData(allPost)
      }
    })



    return () => {

    }



  }, [searchItem, categorySerch])

  const setVistFctn = (data) => {

    const update = firebase.firestore().collection('products').doc(data.id)
    update.update({

      visit: data.visit + 1

    }).then(() => {
      console.log('Document updated successfully!');
    })
      .catch(error => {
        console.error('Error updating document: ', error);
      });
  }



  return (

    productData[0] ? productData.map((data, index) => {


      return (
            <div onClick={() => {
              setProductDetail(data)
              setHideDetail(!HideDeatail)
              setVistFctn(data)
            }}
            >

              < SingleProuduct data={data} index={index} ></SingleProuduct>
            </div>
          
      )
    }) :
      // no result page 
 <div className='loading-container'>
  <div class="loader">
  <div class="loader-wheel"></div>
  <div class="loader-text"></div>
</div>
 </div>
    //  no result found page desin
  )
}
export default Prodcuts
