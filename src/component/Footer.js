import './Footer.css'
import React from 'react'
import {FaFacebook, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";
const Foter = () => {
  return (
    <div className='footer'>
        <div className="foter-contener">
       <div className="left">
        
            <div className="location">
                  <FaHome size={20} style={{color:"green",margin:"2rem"}}/>
<div>
    <p> :Adiss Abeba </p>
    
</div>

            </div>
            <div className='phone'><FaPhone size={20} style={{color:"green",margin:"2rem"}}/>
             <div><p>:+251 955 45 72 ** </p></div>
                
            </div>

            <div className='Email'>
                <FaMailBulk size={20} style={{color:"red",margin:"2rem"}}/>
           <div><p>:mabinet22@gmail.com</p></div>
                
            </div>
        </div>
        <div className="right">
          <h4>About Us</h4>  
          <p>Welcome to Visit Ethiopia, your ultimate guide to exploring the beauty and culture of Ethiopia! We offer personalized travel experiences, from historical tours of ancient sites like Lalibela and Axum to breathtaking treks in the Simien Mountains. Our goal is to provide you with authentic and unforgettable journeys, whether you're seeking adventure, culture, or relaxation. With local expertise and attention to detail, we're here to help you discover the best of Ethiopia, one remarkable experience at a time. </p>
       
       <div className="social">

         <FaFacebook size={30} style={{color:"blue",margin:"1rem"}}/>
         <FaLinkedin size={30} style={{color:"blue",margin:"1rem"}}/>
       <FaTwitter size={30} style={{color:"blue",margin:"1rem"}}/>
       </div>
       </div>

        </div>
      
    </div>
  )
}

export default Foter
