// import React from 'react'
import { Row,Col } from 'react-bootstrap'
import React, { useRef, useState } from "react";
import Swiper from './Swiper';
// import "./styles.css";
const SinPro = ({imgData}) => {
    // console.log(sinpro)
  return (
    <>
    <Row>
        <Col>
        <Swiper imgData={imgData}/>
     
        </Col>
    </Row>
    </>
  )
}

export default SinPro