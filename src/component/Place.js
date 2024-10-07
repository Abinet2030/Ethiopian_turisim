import React from 'react'
import { Link } from 'react-router-dom'
import '../page/Home.css'
import Footer from './Footer'
function Place() {
  return (
    <div className='mean_page'>
        <div className="image-container">
             <img
              src="./asset/lalibela1.png" 
              alt="Lalibella"
               className="image"
             />
              
               <div className="text-container">
             <h1 className="title">Explore Ethiopia</h1>
            <p className="description">
             Ethiopia, the land where humanity's roots first took hold, stands as a symbol of strength, 
             history, and the timeless journey of our shared ancestry.
          </p>
           <Link to="about"><button className='btn_lern'>Learn More</button>
          </Link>
                  
          </div>


           </div>

           <div className="tour-place">

                   <div className='place'>
                       
                       <img className="imagee"
              src="./asset/food.png" 
              alt="food"
           
               
             />
                <h3>Ethiopian Food</h3>
                <p>Ethiopian cuisine is a feast for the senses, offering rich and bold flavors that reflect the country’s vibrant culture.
                 </p>
                   </div >
                     <div className='place'>
                  
                    <img
              src="./asset/afdera.png" 
              alt="Afdera"
               className="imagee"
             />
             <h3>Dallol Land of Beauty</h3>
             <p>It is a place in the Dallol district of northern Ethiopia. It is situated at nearly 130 meters below sea level. 
              It has been reported as a ghost city.</p>
                   </div>
                   


                          <div className='place'>
                  
                    <img
              src="./asset/wolf.png" 
              alt="wolf"
               className="imagee"
             />
             <h3>Ethiopian Wolf</h3>
             <p>Native to the highlands of Ethiopia,this animal is often called Africa’s rarest carnivore. With fewer than 500 individuals remaining in the wild,
               the Ethiopian wolf is a species you definitely want to know about.</p>
                   </div>
                     <div className='place'>
                  
                    <img
              src="./asset/meskel.png" 
              alt="meskel"
               className="imagee"
             />
             <h3>Meskel Ethiopian Holyday</h3>
             <p>The Meskel Ethiopian holiday celebration 
              is a colossal and colorful event in Ethiopia with interesting origins.</p>
                 
                   </div>
               <Footer/>     
           </div>
           
    </div>
  )
}

export default Place