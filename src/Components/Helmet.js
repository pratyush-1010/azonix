import React from 'react'
import {Row,Col} from 'react-bootstrap'
const Helmet = () => {
  return (
    <div className='container p-5 cutt heldiv'>
        <Row className='p-5 g-5 heldiv'>
            <Col md={6} sm={12} className='py-5 heldiv'>
                <div  className='clothing p-5 heldiv' style={{position:"relative"}}>
                    <div className='bg-light py-3 px-5 inhel'>
                        <h3>CLOTHING UP TO<br></br>
                            50% OFF</h3>
                        <p className='text-muted'>Made for the planet, from the planet!</p>
                    </div>
                </div>
            </Col>
            <Col md={6} sm={12} className='py-5 heldiv'>
            <div  className='helmet p-5 heldiv' style={{position:"relative"}}>
            <div className='bg-light py-3 px-5 inhel'>
                        <h3>Helmet UP TO<br></br>
                            50% OFF</h3>
                        <p className='text-muted'>Made for the planet, from the planet!</p>
                    </div>
            </div>
            </Col>

        </Row>
    </div>
  )
}

export default Helmet