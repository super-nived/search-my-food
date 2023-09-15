import React, { useState, useEffect, useContext } from 'react'
import './form.css'
import { FaUpload } from 'react-icons/fa'
import PIC from '../../assets/form.png'
import { FirebaseContext } from '../../store/firebaseContext'
import { useNavigate } from 'react-router-dom';
import Threenav from '../3dnav/threenav'
import Header from '../header/Header'
import GIF from '../../assets/form.gif'
import { DistrictList, categories, indiaStates } from '../Data/data'
import SecondNav from '../secondNav/SecondNav'
function Form2() {



    // spinning loading screen setup //
    let [loading, setLoading] = useState(false);
    let [isReadyTOupload,setReadyTOuplaod] = useState(false)
    // spinning loading screen setup //


    const navigate = useNavigate()
    const { firebase } = useContext(FirebaseContext)

    const inputs = document.querySelectorAll(".input");
    const selects = document.querySelectorAll(".select");

    const [changeSponserImage, setChangeSposerImage] = useState(false)
    const [changeFoodImage, setChangeFoodImage] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date());
    const [twoHour, setTwoHour] = useState()
    const [error, setError] = useState({})


    const initialValues = { sponserImage: '',foodImage: '', sponserName: '', house: '', city: "", phone: '', state: '', district: '', area: '', food: '', detail: '', category: '',visit:0 }
    const [formData, setFormData] = useState(initialValues)


   

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        console.log(formData, 'form data')
    }

    const handleImageChange = (e) => {
        const name = e.target.name
        const value = e.target.files[0]
        setFormData({ ...formData, [name]: value })

    }

    const validate = (data) => {
        const errorList = {}
        if (!data.sponserImage) {
            errorList.sponserImage = ' sponser image is required !'

        }
        if (!data.foodImage) {
            errorList.foodImage = ' food image is required !'
        }

        return errorList
    }

    const handleSubmit =async (e) => {
        console.log(error)
        e.preventDefault();
        setError(validate(formData))
        setReadyTOuplaod(true)
    
    };


    useEffect(() => {

        if ((Object.keys(error).length === 0) && isReadyTOupload){
            setLoading(true)
            handleUpload()
        }
 
        setCurrentTime(new Date());
        const twoHoursLater = new Date(currentTime);

        twoHoursLater.setHours(twoHoursLater.getHours() + 11);
        // twoHoursLater.setHours(twoHoursLater.getHours() + 11)
        twoHoursLater.toLocaleTimeString()
        setTwoHour(twoHoursLater.toString())


    }, [error])


    // uploading image to firebase 

    const uploadImageToStorage = (image, path) => {
        return new Promise((resolve, reject) => {
          firebase
            .storage()
            .ref(`${path}${image.name}`)
            .put(image)
            .then(({ ref }) => {
              ref.getDownloadURL().then((url) => {
                resolve(url);
              });
            })
            .catch((error) => {
              reject(error);
            });
        });
      };


      const handleUpload = async () => {
      console.log('sdlflskdjklsdjklasdjklfasjklfasdjklasjkljklsd')

     try {
        const sponserImageUrl = await uploadImageToStorage(formData.sponserImage, '/sponser-images/');
        const foodImageUrl = await uploadImageToStorage(formData.foodImage, '/food-images/');
        formData.sponserImage=sponserImageUrl
        formData.foodImage = foodImageUrl
        formData.date=twoHour
        

        await firebase.firestore().collection('products').add(formData);

        setLoading(false);
        console.log('Product added successfully');
        navigate('/');

     } catch (error) {
        setLoading(false);
        console.error('Error adding product: ', error);
        
     }

    }


    // input filed additional style
    const imageHide = {
        display: 'none',
    }
    const imageShow = {
        display: 'block',
        width: "3rem",
        height: "3rem",
        borderRadius: '50%'
    }
    const divHide = {
        display: 'none',
    };
    const OptionShow = {
        display: 'block'
    }
    const divShow = {
        color: 'red',
    };

    const CategoryShow = {

        display: 'block'
    }

    const CategoryHide = {

        display: 'none'
    }
    //  end this style


    // input box styling
    function addcl() {
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }

    function remcl() {
        let parent = this.parentNode.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }


    inputs.forEach(input => {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
    });

    selects.forEach(select => {
        select.addEventListener("focus", addcl)
        select.addEventListener("blur", remcl)
    })
    // input box styling


    return (
        <div className='form-body'>
            <Header></Header>
            <div className='form-container'>
                {loading ? <div className='loading'><img src={GIF}></img></div> : ''}

                <div class="container">

                    <div class="img">
                        <img src={PIC} ></img>
                    </div>
                    <div class="login-content">
                        <form onSubmit={(e) => { handleSubmit(e); }} >
                            <h4 class="title">about sponser</h4>
                            <div className='first'>
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <h5 >sponser-name</h5>
                                        <input name='sponserName' onChange={handleChange} type="text" class="input" required />
                                    </div>
                                </div>

                                <div class="input-div one">


                                    <div class="i">
                                    
                                    <FaUpload />
                                    </div>
                                    
                                    {formData.sponserImage && <img src={URL.createObjectURL(formData.sponserImage)} alt="Selected" />}
                                    <div class="div" style={formData.sponserImage ? divHide : divShow}>
                                        
                                        <h5  >sponser image</h5>
                                        <label  id='file-label'>
                                           
                                            <input name='sponserImage' type="file" accept="image/*" onChange={handleImageChange} />
                                           
                                        </label>
                                    </div>
                                    {<small> {error.sponserImage && error.sponserImage} </small>}
                                        
                                         
                                </div>

                            </div>
                            <div className='first'>
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <h5>home</h5>
                                        <input name='house' type="text" class="input" onChange={handleChange} required />
                                    </div>
                            </div>

                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <h5>local-area</h5>
                                        <input name='area' type="text" class="input" onChange={handleChange} required />
                                    </div>
                                </div>

                            </div>



                            <div className='first'>
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <h5>city</h5>
                                        <input name='city' type="text" class="input" onChange={handleChange} required />
                                    </div>
                                </div>

                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">


                                        <h5>district</h5>
                                        <select className='select' name='district' value={formData.district} onChange={handleChange} required>
                                            <option  ></option>
                                            {DistrictList.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                            </div>

                            <div className='first'>
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <h5>state</h5>
                                        <select className='select' name='state' value={formData.state} onChange={handleChange} required>
                                            <option  ></option>
                                            {indiaStates.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <h5>phone-number</h5>
                                        <input name='phone' type="number" class="input" onChange={handleChange} required />
                                    </div>
                                </div>

                            </div>

                            <h4 class="title">food section</h4>

                            <div className='first'>
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <h5>food-name</h5>
                                        <input name='food' type="text" class="input" onChange={handleChange} required />
                                    </div>
                                </div>

                                <div class="input-div one">


                                    <div class="i">
                                    <FaUpload />
                                    </div>
                                    {formData.foodImage && <img src={URL.createObjectURL(formData.foodImage)} alt="Selected" />}
                                    <div class="div" style={formData.foodImage ? divHide : divShow}>
                                        
                                        <h5 >food image</h5>
                                        <label id='file-label'>
                                            <input name='foodImage' type="file" accept="image/*" onChange={handleImageChange} />
                                           
                                        </label>
                                    </div>


                                </div>

                            </div>


                            <div className={ 'first'}>
                                <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <h5>category</h5>
                                        <select className='select' name='category' value={formData.category} onChange={handleChange} required>
                                            <option  ></option>
                                            {categories.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                      

                            </div>
                            <div className='first'>
                            <div class="input-div one">
                                    <div class="i">
                                        <i class="fas fa-user"></i>
                                    </div>
                                    <div class="div">
                                        <h5>detail</h5>
                                        <input name='detail' type="textarea" class="input" value={formData.detail} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>


                            <button className='submit-button' class="btn" value="Donate" >Donate</button>
                        </form>
                    </div>
                </div>

            </div>
    {/* bottom-nav */}
 
    <SecondNav></SecondNav>
   
   {/* bottom-nav */}
        </div>
    )
}

export default Form2










