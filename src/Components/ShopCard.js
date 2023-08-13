import React from 'react'
import { Link } from 'react-router-dom'

const ShopCard = ({bikes}) => {
    // const np=bikes.proPrice.toLocalString("en-IN")
  return (
    <Link to={`/singlepro/${bikes._id}`} style={{textDecoration:"none",color:"black"}}>
    <div className='border shopcard p-2 text-center'>
<img src={"http://localhost:5000/uploads/"+bikes.proImage[0]} style={{height:"300px",width:"300px"}} className='shopimg'/>
    <h3 className='shopcardname'>{bikes.proName}</h3>
    <h4>Rs {bikes.proPrice.toLocaleString("en-IN")}</h4>
    </div>
    </Link>
  )
}

export default ShopCard