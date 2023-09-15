import React,{useEffect,useContext} from 'react'
import './Sponser.css'
import { ProdcutsDetailContext } from '../../store/firebaseContext'
import GIF from '../../assets/ganja.jpg'
import Threenav from '../../componats/3dnav/threenav'
import Header from '../../componats/header/Header'
import SecondNav from '../../componats/secondNav/SecondNav'
function Sponser() {
  const {detail} = useContext(ProdcutsDetailContext)
  useEffect(() => {
     
    
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className='sponsers'>
      <Header></Header>
      <div className='imgbox'>
      <img src={detail.sponserImage ? detail.sponserImage : GIF} alt="" />
      </div>
      {/* bottom-nav */}
        <SecondNav></SecondNav>
      {/* bottom-nav */}
    </div>
  )
}

export default Sponser