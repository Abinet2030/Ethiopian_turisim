import React from 'react'
import NavBar from '../component/NavBar'
import { Link} from 'react-router-dom'

import './About.css'

function About() {
  return (
    <div >
      <NavBar/>

        <div className='aboutdiv'>
             <h1>About Us </h1>
          <p>

            We specialize in providing unforgettable experiences in Ethiopia,
             from breathtaking landscapes to rich cultural heritage.
          </p>
          <h3> Our Mission</h3>
          <p> At Visit Ethiopia, we are passionate about showcasing the true beauty and culture of Ethiopia. Whether you're interested in exploring ancient history, experiencing the vibrant local culture, or immersing yourself in Ethiopia's stunning natural landscapes,
             we are here to make your journey unforgettable. </p>
             <h3> Why Ethiopia?</h3>
             <p>
              Ethiopia is a land of wonder, offering travelers an experience unlike anywhere else in the world. From the towering peaks of the Simien Mountains to the timeless rock-hewn churches of Lalibela, Ethiopia is rich in history, diversity, and natural beauty. Our team is dedicated to creating personalized, immersive travel experiences that let you explore the country’s
               most iconic sites and hidden gems.
             </p>
             <h3>Join Us in Exploring Ethiopia</h3>
             <p>
              No matter where you're coming from, whether you’re a seasoned traveler or a first-time visitor, Ethiopia offers an experience that will stay with you forever. Let us help you discover the heart of Africa.
             </p>
             <Link to="/"><button className='btn_Home'>Back to Home</button>
          </Link>

        </div>

         
        </div>
      
               
      
  )
}

export default About