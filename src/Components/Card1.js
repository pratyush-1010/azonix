import React from 'react'
import BikeCard from './BikeCard'

const Card1 = ({ele}) => {
  return (
    <div className='cardiv text-center'>
    <div className='datadiv'>

            <h2 className='text-center text-white catt'>{ele.categoryName}</h2>
    </div>
        <img src={"http://localhost:5000/uploads/"+ele.categoryImage} className='catimg' ></img>
       
        
    </div>
  )
}

export default Card1