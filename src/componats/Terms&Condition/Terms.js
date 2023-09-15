import React from 'react'
import { Link } from 'react-router-dom'
import './Terms.css'
import Threenav from '../3dnav/threenav'
import SecondNav from '../secondNav/SecondNav'
function Terms() {
  return (
    <div className='tersm'>
      <div class="bg"></div>
      <div class="terms-box">
        <div class="terms-text">
          <h2>Terms And Conditions</h2>
          <h5>Welcome to search my food!</h5>
          By accessing and using [Your Food App Name] ("the App"), you agree to these terms and conditions. The App allows users to upload food posts with images, food details, and sponsor information, as well as view and contact others for food donations. It is important to note that the App does not require user authentication, and anyone can upload or read content. Users are solely responsible for the accuracy and legality of the content they post and must not engage in unlawful or harmful activities. The App serves as a platform for connecting users but does not assume responsibility for the actual donation process. All content provided by the App is protected by intellectual property laws, and users must respect these rights. By using the App, you understand and accept that the platform is provided "as is," without warranties, and the App shall not be liable for any indirect, incidental, or consequential damages. These terms are subject to change, and it is your responsibility to review them periodically. The App is governed by the laws of [Your Jurisdiction], and for any inquiries or concerns, please contact us at [yourfoodappemail@gmail.com].



          <h4>I Agree To The <span> Terms And Conditions</span> And I Read The Privacy Notice</h4>
          <div class="t-buttons">
            <button class="t-btn red-btn"><Link to='/' style={{ textAlign: 'center' }}>Accept</Link></button>
            <button class="t-btn gray-btn"> <Link to='/' style={{ textAlign: 'center' }}>Decline</Link></button>
          </div>

        </div>
      </div>

        {/* bottom-nav */}
 
        <SecondNav></SecondNav>
   
      {/* bottom-nav */}
    </div>
  )
}

export default Terms