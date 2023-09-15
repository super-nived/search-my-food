
import React,{useEffect,useState,useContext} from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './componats/home/home';
import { CategeorySearchFctn, PageCheckFctn, SearchFctn } from './store/firebaseContext'
import { ProductdetailFctn } from './store/firebaseContext';
import { FirebaseContext } from './store/firebaseContext';
import Sponser from './pages/sponser/Sponser';
import About from './componats/newAbout/About';
import Terms from './componats/Terms&Condition/Terms';
import Form2 from './componats/newForm/form';
import ContactForm from './componats/contact/Contact';



function App() {
  

  
  const date = new Date(); // current date and time

  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "numeric",
    
    hour12: true,
  });
  console.log(formattedDate.substring(0,10))
  console.log(formattedDate.substring(12,14))
  return (

  
   <div>

    <PageCheckFctn>
    <ProductdetailFctn>
    <CategeorySearchFctn>
    <SearchFctn>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/sponser' element = {<Sponser></Sponser>}></Route>
      <Route path='/form' element = {<Form2></Form2>}/>
      <Route path='/contact' element = {<ContactForm></ContactForm>}/>
      <Route path='/about' element = {<About/>}></Route>
      <Route path = '/terms' element= {<Terms></Terms>}></Route>
    </Routes>
    </BrowserRouter>
    </SearchFctn>
    </CategeorySearchFctn>
    </ProductdetailFctn>
    </PageCheckFctn>
   </div>
   
  )
}

export default App;
