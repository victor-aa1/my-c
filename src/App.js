import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import CategoriesItem from './components/categories/CategoriesItem';
import Home from './routes/home/home';

const App =() => {
  
  return(
    <Routes>
      <Route path='/' element={<Home />}/>
      {/* <div className="categories-container">
       <Home/>
      </div> */}
 
    </Routes>
    
  );
}

export default App
