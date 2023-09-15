import React from 'react'
import './About.css'
import {GrAchievement} from 'react-icons/gr'
import {ImManWoman} from 'react-icons/im'
import { AiOutlineTrophy} from 'react-icons/ai'
import { RiBuildingFill} from 'react-icons/ri'
import PIC from '../../assets/form.png'
import Threenav from '../3dnav/threenav'
import Header from '../header/Header'
import SecondNav from '../secondNav/SecondNav'
function About() {


  return (
    <div className='about-body'>
      <Header></Header>
    <div className='about-achievements'>
     
      <div className='container about-achievements-container'>
        <div className="about-left">
         <img src={PIC} alt="" />
        </div>
        <div className="about-right">
         <h1>Welcome</h1>
       
         <p>Welcome to Food Waste Management, a community-driven platform dedicated to reducing food waste and helping those in need.</p>
                
                <h2>Our Mission</h2>
                <p>Our mission is simple: to connect those with surplus food to individuals and organizations in need. We believe that no food should go to waste when there are people struggling with hunger.</p>
                
                <h2>How It Works</h2>
                <p>Anyone can use our platform to upload details about surplus food they want to donate. The food details will be visible to those in need. After 4 hours, any uploaded food information is automatically removed to ensure the information is current.</p>
                 
                <h2>Get Involved</h2>
                <p>We rely on the support of individuals like you to make this initiative successful. Whether you have surplus food to donate or want to volunteer your time, every contribution helps us in our mission.</p>
                 
                <h2>Contact Us</h2>
                <p>If you have any questions or suggestions, please feel free to <a href="contact.html">contact us</a>. We would love to hear from you!</p>
         <div className="achievements-cards">
            <article className='achievement-card'>
              <span className='archievement-icon'><AiOutlineTrophy></AiOutlineTrophy></span>
              <h3>450+</h3>
              <p>achievement</p>
            </article>
             
            <article className='achievement-card'>
              <span className='archievement-icon'><ImManWoman/></span>
              <h3>5000L+</h3>
              <p>users</p>
            </article>
              
            <article className='achievement-card'>
              <span className='archievement-icon'><AiOutlineTrophy/></span>
              <h3>34+</h3>
              <p>Awards</p>
            </article>
     
         </div>
        </div>
        </div>

      {/* bottom-nav */}
 
        <SecondNav></SecondNav>
   
      {/* bottom-nav */}

    </div>
    </div>
 
  )
}

export default About