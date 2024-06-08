import React, { useEffect, useState } from 'react'
import './contact.css'

export default function Contact() {

    const [countText, setCountText] = useState(0);

    const handleMessage = (event) => {
         setCountText(event.target.value.length)
    }

    function addUp(){
       document.querySelector("#textMessage").getAttribute("maxLength") -
         countText;
    }
    

   useEffect(()=>{
   document.querySelector("form").addEventListener("submit", (event)=>{
       event.preventDefault();
    })
   })


   
  return (
    <div className="contact-container">
      <div className="contact-box">
        <div className="contact-text">
          <h2>Contact Us</h2>
          <p>Please fill this form in a descent manner</p>
        </div>
        <form>
          <div className="name">
            <label style={{color:"#000000"}}>Full Name</label>
            <div className="inner-name">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required/>
            </div>
          </div>
          <div className="email">
            <input type="email" placeholder="Email" required/>
            <p>example@gamail.com</p>
          </div>
          <div className="message">
            <textarea id='textMessage' rows="10" placeholder='Message' maxLength={250} onChange={(index) => handleMessage(index)}></textarea>
            <div className='textChild'>
                <p id='getCount'>0</p>
                <p id='getRemain'>0</p>
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
