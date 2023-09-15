import React from "react"
import { createContext } from "react"
import { useState } from "react"

export const FirebaseContext = createContext(null)

export const ProductContext = createContext(null)

export const ItemsList = createContext(null)

export const SearchContex = createContext(null)

export const CategorySearchContext = createContext(null)

export const PageCheckContext = createContext(null)

export const ProdcutsDetailContext = createContext(null)
 
export default function ProductDataFctn ({children}){
     const [productData,setProductData] = useState([])
     return (
        <ProductContext.Provider value={{productData,setProductData}}>
           {children}
        </ProductContext.Provider>
     )
}


export const  ItemsListFctn = ({children}) =>{
   const [Item,setItem] = useState([])
   const [mainData,setMainData] = useState([])
   return (
      <ItemsList.Provider value={{Item,setItem,mainData,setMainData}}>
         {children}
      </ItemsList.Provider>
   )


}

export const SearchFctn = ({children})=>{
   const [searchItem,setsearchItem] =useState()
   return(
      <SearchContex.Provider value={{searchItem,setsearchItem}} >
         {children}
      </SearchContex.Provider>
   )
}


export const ProductdetailFctn = ({children}) =>{
   const [ detail,setProductDetail] =   useState({})
   const [HideDeatail,setHideDetail] = useState(false)
   return(
      <ProdcutsDetailContext.Provider value={{detail,setProductDetail,HideDeatail,setHideDetail}}>
         {children}
      </ProdcutsDetailContext.Provider>
   )
}

export const CategeorySearchFctn = ({children})=>{
  const  [categorySerch,setCategoySearch] = useState()
   return(
   
   <CategorySearchContext.Provider value = {{categorySerch,setCategoySearch}}>
        {children}
   </CategorySearchContext.Provider>
)
}

export const PageCheckFctn = ({children})=>{
   const [page,setPage]= useState()

   return(
      <PageCheckContext.Provider value={{page,setPage}}>
         {children}
      </PageCheckContext.Provider>
   )
}