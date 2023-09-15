import React, { useContext, useEffect } from 'react'
import './ProductContainer.css'
import Product from './Product'
import { CategorySearchContext, FirebaseContext, ProdcutsDetailContext, ProductContext, SearchContex } from '../../store/firebaseContext'
function ProduContainer() {

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
          data.food.toLowerCase().includes(searchItem.toLowerCase()) ||
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
    <section className='team'>


      {
        productData[0] ?
          <div className="product-list-container team-container">
            {productData && productData.map((data, index) => (
              <div onClick={() => {
                setProductDetail(data)
                setHideDetail(!HideDeatail)
                setVistFctn(data)
              }}> <Product data={data} key={index}></Product> </div>
            ))}
          </div> :
          <div className='page-not-found'>
            <h4>no result found</h4>
            <p>You can refresh the page or select any category section</p>
          </div>


      }

    </section>
  )
}

export default ProduContainer