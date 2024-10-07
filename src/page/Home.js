import React from 'react'
import './Home.css'

import NavBar from '../component/NavBar'
import Place from '../component/Place'


function Home() {
  return (
    <div className='home'>

         <NavBar/> {/* a component for our navigation bar */}
          <Place/>
          
     </div>
   
  )
}

export default Home