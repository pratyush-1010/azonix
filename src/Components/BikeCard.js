import { faEye, faRupee, faRupeeSign, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const BikeCard = ({bikes}) => {
//   console.log(bikes._id)
  return (
    <div className='container bikebox'>
        <Row>
            <Col md={5} className='p-4'>
        <img src={"http://localhost:5000/uploads/"+bikes.proImage[0]} style={{height:"300px",width:"70%"}}></img>
            </Col>
            <Col md={7} className='p-4 text-start'>
                <p className='bikeinfo infop1'>{bikes.proName}</p>
                <p className='bikeinfo infop2'>{bikes.proDesc}</p>
                {/* <p>{bikes.proSku}</p> */}
                <p className='bikeinfo infop2'><FontAwesomeIcon icon={faRupeeSign}></FontAwesomeIcon> {bikes.proPrice.toLocaleString("en-IN")}</p>
          
            <Link to={`/singlepro/${bikes._id}`}>
               <button className='bikeicons bikeinfo'>View</button>
            </Link>
               
                {/* <button className='bikeicons bikeinfo'>Add to Cart</button> */}
                
            </Col> 

        </Row>
    </div>
  )
}

export default BikeCard