import React from 'react'
import Footer from './Footer'
import Appbar from './Appbar'
import { Col, Row } from 'react-bootstrap'
const About = () => {
  return (
    <>
    <Appbar/>

    <div className='about1'>

    </div>
    <div className='p-5'>
    <div className='cutt container'>
      <Row>
      <Col md={8} sm={12} className='text-start p-5'>
      <h1>About Azonix</h1>
      <hr></hr>
      <p className='pb-4'>Slowly she drifted to the southeast, rising higher and higher as the flames ateaway her wooden parts and diminished the weight upon her. Ascending to the roof of the building I watched her for hours until she was lost in the dim finally.</p>
     <p style={{fontWeight:"bold"}}>Store Hours</p>
     <p style={{fontWeight:"bold"}} className='text-muted'>Monday-Saturday : 11am–7pm ET</p>
     <p style={{fontWeight:"bold"}} className='text-muted'>Sunday : 11am–6pm ET</p>
      </Col>
      <Col md={4} sm={12} className=''>
        <img src="./img/about2.webp" className='about2'></img>
      </Col>
      </Row>
    </div>
    </div>
    <div className='cutt container'>
      <Row style={{backgroundColor:"RGB(226 254 255)"}} className='p-5'>
      <Col md={12} className='text-start p-4'> 
      <Row>

     <Col md={4}>
      <h3>Free Shipping</h3>
     </Col>
     <Col md={8}>
      <p>We want you to be happy with your purchase. Therefore, shipping is on us and
        you can return your items up to 90 days.</p>
     </Col>
      </Row>
      </Col>
      <hr></hr>
      <Col md={12} className='text-start p-4'>

      <Row>

<Col md={4}>
 <h3>Express delivery</h3>
</Col>
<Col md={8}>
<p>
Don’t feel like waiting? Our express delivery service ensures you receive your 
new items within 5 business days.
</p>
</Col>
 </Row>
      </Col>
      <hr></hr>
      <Col md={12} className='text-start p-4'>

<Row>

<Col md={4}>
<h3>New styles</h3>
</Col>
<Col md={8}>
<p>
We’re constantly designing new styles and collections. Come back soon to discover what’s new and pick your favourite
</p>
</Col>
</Row>
</Col>
      </Row>
    </div>

  <div className='container cutt p-5'>
    <h3 className='p-5'>Our Team</h3>
      <Row className='g-5'>
        <Col md={4} sm={12}>
        <img src="./img/pp1.jpg" style={{height:"80%",width:"100%"}}></img>
        <h4 className='m-3'>Kaya Luettenge</h4>
        <h5 className='text-muted'>Manager</h5>
        </Col>
        <Col md={4} sm={12}>
        <img src="./img/pp2.jpeg" style={{height:"80%",width:"100%"}}></img>
        <h4 className='m-3'>Jhon Doe</h4>
        <h5 className='text-muted'>CEO</h5>
        
        </Col>
        <Col md={4} sm={12}>
        <img src="./img/pp3.jpg" style={{height:"80%",width:"100%"}}></img>
        <h4 className='m-3'>Haley Walter</h4>
        <h5 className='text-muted'>Designer</h5>
        
        </Col>
      </Row>
  </div>
  <div className='container p-5 cutt mb-5' style={{backgroundColor:"RGB(226 254 255)"}}>
    <div>

    <h1>Member Prices: up to 20% off select styles</h1>
   
    </div>
  </div>
    <Footer/>
    </>
  )
}

export default About

