import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Cutting = () => {
  return (
    <div className='container p-5 cutt '>
        <Row>
            <Col md={6} className='text-start'>
            <img src='./img/bicycle.jpg' style={{height:"100%",width:"100%"}}></img>
              
            </Col>
            <Col md={6}>
            <div className='mt-5 pt-5'>

<div className='text-start my-4'>
    <h1>CUTTING EDGE BIKE</h1>
    <h5>Bike Ark Dirk 27.5 SS</h5>
</div>
<div className='text-start text-muted mb-4'>
    <p>Featuring our Advanced-grade composite frame providing exceptional stiffness-to-weight
ratio on our most versatile geometry and suspension package.</p>
</div>
<Link to={`/singlepro/6482de6ff3c43c476b89c7e5`}>
<button className='bikeicons bikeinfo'>View Details</button>
</Link>
</div>
            </Col>

        </Row>

    </div>
  )
}

export default Cutting