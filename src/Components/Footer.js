import { faEnvelope, faEnvelopeOpen, faEnvelopeSquare, faMailReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Row,Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <div className='p-5 bg-black'>
        <Row className='g-5 row row-col-md-5'>
            <Col className='text-start'>
                <ul className='text-white ulli' style={{listStyle:"none",lineHeight:"35px"}}>
                <p className='text-white'>Contact Us</p>
                    <li>Rains HQ, Jens Olsens Vej 13 ,8200 Aarhus N, Denmark</li>
                    <li>Email : sales@demati.com</li>
                    <li>Phone (+45) 7199 2516</li>
                </ul>
            </Col>
            <Col className='text-start '>
            <ul className='text-white ulli' style={{listStyle:"none",lineHeight:"35px"}}>
                <p className='text-white'>Information</p>
                    <li>Return Policy</li>
                    <li>Start a Return</li>
                    <li>FAQ</li>
                    <li>Privacy Poicy</li>
                    <li>Terms & Conditions</li>
                    <li>Jobs</li>

                </ul>
            </Col>
            <Col className='text-start'>
                <ul className='text-white ulli' style={{listStyle:"none",lineHeight:"35px"}}>
                <p className='text-white'>About Us</p>
               <li>Career</li> 
                <li>About Us</li>
                <li>Sustainability</li>
                <li>Press</li>
                <li>Corporate Governance</li>
                </ul>
            </Col>
            <Col className='text-start'>
                <ul className='text-white ulli' style={{listStyle:"none",lineHeight:"35px"}}>
                <p className='text-white'>Shop</p>
               <li>Women</li> 
                <li>Divided</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Student Discount</li>

                </ul>
            </Col>
            <Col className='text-start'>
                <ul className='text-white ulli' style={{listStyle:"none",lineHeight:"30px"}}>
                <p className='text-white'>Sign Up & Save</p>
               <p className=''>New subscribers receive 10% off their first purchase</p> 
              <input type="text" className='bg-black w-75 me-3 text-white'
              style={{border:"none",borderBottom:"1px solid white",outline:"none"}}
              placeholder='Your E-Mail'
              ></input>
              <button className='bg-black text-white'
              style={{outline:'none',border:"none",borderBottom:"1px solid white",fontSize:"20px"}}><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></button>

                </ul>
            </Col>
        </Row>

    </div>
  )
}

export default Footer