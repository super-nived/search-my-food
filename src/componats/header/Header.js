import React ,{useContext,useState }from 'react';
import { FaSearchLocation } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import LOGO from '../../assets/search.png'
import './Header.css'
import { CiSearch } from "react-icons/ci"
import { ProductContext } from '../../store/firebaseContext';
import { FirebaseContext } from '../../store/firebaseContext';
import {SearchContex} from '../../store/firebaseContext'

function Header() {

  const {searchItem,setsearchItem} = useContext(SearchContex)

  
  const [key,setKey] =useState()
  const {productData,setProductData} = useContext(ProductContext)
  const {firebase} = useState(FirebaseContext)
  const searchProducts = ()=>{


 

  }

  return (
    <header>

    <div className='header-image'>
          <img src={LOGO} alt="image" className="logo" />
    </div>

      <div className='searchBox'>

        <input type='text' placeholder='location...'      
        onChange={(e)=>{
          setKey(e.target.value)
          setsearchItem(e.target.value)
          
        }
        } onClick={(e)=>{
          e.target.value=''
          setsearchItem()
        
        }}></input>
        <CiSearch onClick={()=>{
          setsearchItem( key ? key : '');
        
        ;console.log(searchItem,'000000000000000000000000')}}></CiSearch>
      </div>


      <div className="toggleMenu">
        <GrLocation className="toggleIcon" />
        <span>kerala</span>
      </div>
    </header>



  );
}

export default Header;



