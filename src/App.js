import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import NotFound from './component/NotFound';

function App() {
  return (
    
      <div className="App">
      
          <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        
      </div>
   
  );
}

export default App;
