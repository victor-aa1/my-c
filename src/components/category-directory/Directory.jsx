import React from 'react'
import CategoriesItem from '../categories/CategoriesItem'
import './categorydirec.scss'
const DirectMenu = ({categories}) => {
  
  return (
      <div className='directmenu-container'>
        {categories.map((category) => (
          <CategoriesItem key={category.id} category={category} />
          
        ))}
    </div>
    
  )
}
export default DirectMenu