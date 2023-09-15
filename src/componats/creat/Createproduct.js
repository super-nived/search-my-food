import React,{useEffect,useState,useContext} from 'react'
import "./Createproduct.css"
import firebase from '../firebase/config'
import { FirebaseContext } from '../../store/firebaseContext'
import { AiFillHome } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

function Createproduct() {

  const {firebase} = useContext(FirebaseContext)

  const [name,setName] = useState()
  const [house,setHouse] = useState()
  const [phone,setPhone] = useState()
  const [state,setState] = useState()
  const [district,setDistrict] = useState()
  const [city,setCity] = useState()
  const [area,setArea] = useState()
  const [image,setImage] = useState()
  const [food,setFood] = useState()
  const [detail,setDetail] = useState()
  const date= new Date
  
  const navigate = useNavigate();

  
  useEffect(() => {
    
    firebase.firestore().collection('products').get().then((results)=>{
      const allPost = results.docs.map((product)=>{
    return (
      
        {...product.data(),product,id:product.id}

        )
      })
      console.log(allPost)
     
     
     })
  

  }, [])
  



  const formSubmit = ()=>{
     


    firebase.storage().ref(`/images/${image.name}`).put(image).then(({ref})=>{
     ref.getDownloadURL().then((url)=>{
 
       firebase.firestore().collection('products').add({
         name,
         house,
         phone,
         district,
         area,
         state,
         city,
         url,
         food,
         detail,
         date: date.toDateString(),
         visit:0,

       }).then((data)=>{ 
        navigate('/')
        window.location.reload();
      })
    
     })
   })

 
 }
 
  return (
    <div className='Create-page'>
        
        <div className="create-form">

            <input onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='yourname'>

            </input>
            <input onChange={(e)=>{setHouse(e.target.value)}} type='text' placeholder='housename'>

            </input>
            <input onChange={(e)=>{setPhone(e.target.value)}} type='text' placeholder='phone-number'>

            </input>
            <input onChange={(e)=>{setState(e.target.value)}} type='text' placeholder='state'>

            </input>
            <input onChange={(e)=>{setDistrict(e.target.value)}} type='text' placeholder='district'>

            </input>
            <input onChange={(e)=>{setCity(e.target.value)}} type='text' placeholder='city'>

            </input>
            <input onChange={(e)=>{setArea(e.target.value)}} type='text' placeholder='local-area'>

            </input>
            <input onChange={(e)=>{setFood(e.target.value)}} type='text' placeholder='food-name'>

            </input>
            <input onChange={(e)=>{setImage(e.target.files[0])}} type='file' placeholder='image'>

            </input>
            <input onChange={(e)=>{setDetail(e.target.value)}} type='text' placeholder='food-detail'>

            </input>
            <button type='submit' onClick={()=>{formSubmit()}} >submit</button>

            <label onClick={()=>{navigate('/');}}>
     
              <span></span>
              <AiFillHome></AiFillHome>
            </label>

        </div>
           
    </div>
  )
}

export default Createproduct