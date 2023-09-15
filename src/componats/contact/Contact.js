import React from 'react'
import './ConctaForm.css'
import SecondNav from '../secondNav/SecondNav'

function ContactFomr() {
  return (
    <div className='main-contact-form'>
    <div class="form-box">
      <h3>Contact Form</h3>
      <form action="https://api.formbucket.com/f/c2K3QTQ" method="post">
        <div class="form-group">
          <label for="name">Name</label>
          <input class="form-control" id="name" type="text" name="Name"/>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input class="form-control" id="email" type="email" name="Email"/>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" name="Message"></textarea>
        </div>
        <input class="btn btn-primary mt-4" type="submit" value="Submit" />
      </form>
    </div>
         <SecondNav></SecondNav>
    </div>


  )
}

export default ContactFomr