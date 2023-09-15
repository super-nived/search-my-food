
import React ,{useContext} from'react'
import'./three.css'
import {CiSearch} from 'react-icons/ci'
import { AiFillHome } from 'react-icons/ai'
import { IoMdAdd } from 'react-icons/io'
import { BsQuestionLg } from 'react-icons/bs'
import { BsFillTelephoneForwardFill } from 'react-icons/bs'
import { SiRiotgames } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { ProdcutsDetailContext } from '../../store/firebaseContext'

function Threenav() {

  const {detail,HideDeatail,setHideDetail,setProductDetail} = useContext(ProdcutsDetailContext)

  return (
    <div className='t-main'>
         <div className='button'>
            <label>
            <Link to='/'>  <input  type='checkbox' name='check'></input> </Link>
                <span></span>
              <AiFillHome></AiFillHome>
            </label>

            <label>
             <Link to='/about'><input type='checkbox' name='check'></input></Link>  
                <span></span>
                <BsQuestionLg></BsQuestionLg>
            </label>

            <label  id='add-btn' >
           <Link to='/form'> <input type='checkbox' name='check'></input> </Link>
             <span></span>
                <IoMdAdd></IoMdAdd>
            </label>

            <label>
         <Link to='/terms'>   <input type='checkbox' name='check'></input> </Link>
                <span></span>
                <SiRiotgames></SiRiotgames>
            </label>

            <label>
            <Link to='/contact'> <input type='checkbox' name='check'></input> </Link>
                <span></span>
                <BsFillTelephoneForwardFill></BsFillTelephoneForwardFill>
            </label>
        </div>

    </div>
  )
}

export default Threenav