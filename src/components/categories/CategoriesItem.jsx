import React from 'react'
import './categoriesItem.scss'

const CategoriesItem = ({category}) => {
  const {imageUrl, title } = category
  return (
    <div>
      <div className="category-container">
        
        <div className='backgroundImage'
          style={{backgroundImage: `url:(${imageUrl})` }
          }
          />
         
         <div className="category-bod-container">
           <h2>{title} </h2>
           <p> Shop Now</p>
         </div>
      </div> 
    </div>
  )
}

export default CategoriesItem