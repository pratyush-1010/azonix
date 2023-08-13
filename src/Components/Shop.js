import React,{useEffect,useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Dropdown1 from './Dropdown1'
import Spro from './Spro'
import PriceRange from './PriceRange'
import Dropdown2 from './Dropdown2'
import axios from 'axios'
import Appbar from './Appbar'
import Footer from './Footer'
const Shop = () => {

  
  return (
    <>
    <Appbar/>
    <div className='container-fluid p-5  mainshop'>
        <h1>Our Products</h1>
        <Row>
            <Col md={3} sm={3} className='' style={{padding:"0"}}>
                <Dropdown1/>
                <hr style={{color:"cyan",backgroundColor:'cyan',height:"3px"}} className='shophr'></hr>

                {/* <PriceRange/> */}
                <Dropdown2 />
                <hr style={{color:"cyan",backgroundColor:'cyan',height:"3px"}} className='shophr'></hr>

            </Col>
            <Col md={9} sm={9}>
                <Spro/>
                
            </Col>
        </Row>
    </div>
    <Footer/>
    </>
  )
}

export default Shop