import React from 'react'
import './categoriesItem.scss'

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  
    return (
      
        <div className="category-container">
          
          <div 
            className='background-image'
            style={{
              backgroundImage: `url(${imageUrl})`,
        }}
            />
          
          <div className="category-bod-container">
            <h2>{title} </h2>
            <p> Shop Now</p>
          </div>
        </div> 
  
    );
}

export default CategoryItem;