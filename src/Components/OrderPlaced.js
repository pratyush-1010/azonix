import React from 'react'
import Footer from './Footer'
import Appbar from './Appbar'
import { Row,Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Clrdata } from '../Actions/Actions'
const OrderPlaced = () => {
    const final=localStorage.getItem('final')
    const subtotal=localStorage.getItem('subtotal')
    const statecart = localStorage.getItem('statecart');

    const nfinal=JSON.parse(final)
    const nsubtotal=JSON.parse(subtotal)
    const nstatecart=JSON.parse(statecart)
    const date= new Date()
    const ndate=date.toDateString()

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const clrall=()=>{
        localStorage.removeItem('final')
        localStorage.removeItem('subtotal')
        localStorage.removeItem('statecart')
        navigate('/')
        dispatch(Clrdata());
    }
  return (
    <>
    <Appbar/>
    <div className='cutt py-5' style={{backgroundColor:"RGB(189 252 255)"}}>
        <div className='container py-2 w-75' style={{backgroundColor:"white"}}>
    <h1>Order Placed!</h1>
    <h3 className='my-5'>Thank you. Your order has been received.</h3>
    <Row>
        <Col>
        <hr></hr>
        <Row>
            <Col md={3}>
                <p style={{fontWeight:"bold"}}>OrderNumber :</p>
                <p className='text-bold'>1234</p>
            </Col>
            <Col md={3}>
            <p style={{fontWeight:"bold"}}>Date :</p>
                <p className='text-bold'>{
                    ndate
                }</p>
            </Col>
            <Col md={3}>
                <p style={{fontWeight:"bold"}}>Total :</p>
                <p className='text-bold'>{"Rs " + nsubtotal.toLocaleString("en-IN")}</p>
            </Col>
            <Col md={3}>
                <p style={{fontWeight:"bold"}}>Payment Method :</p>
                <p className='text-bold'>{nfinal.pom}</p>
            </Col>
           
        </Row>
        <hr></hr>
        <Row>
            <h3>Order Details</h3>
            <Col>
                
            {
                nstatecart.map((ele,ind)=>{
                    return(
                        <>
                        <div style={{display:"flex",justifyContent:"space-between"}} className='px-5'>
                        <p>{ind+1}</p>
                        <img src={"http://localhost:5000/uploads/"+ele.proImage[0]} style={{height:"80px",width:"80px",border:"1px solid cyan"}}></img>
                        <p>{ele.proName}</p>
                        <p>{"Rs "+ele.proPrice.toLocaleString("en-IN")}</p>
                </div>
                        <br></br>
                    </>
                        )
                    })
                }
            </Col>
        </Row>
        </Col>
    </Row>
        <hr></hr>
    <div className='p-5'>
        <Row className='g-5 text-center' >
            <Col className='text-start' md={6}>
            <h3>Billing Address</h3>
            <p className='text-muted'>{nfinal.fname} {nfinal.lname},
            <br></br>
            {nfinal.street},<br></br>
            {nfinal.town},<br></br>
            {nfinal.pin},<br></br>
            {nfinal.country}</p>
            </Col>
            <Col md={6} className='text-start'>
            <h3>Shipping Address</h3>
            <p className='text-muted'>
            Ali Tufan
Bedford St,<br></br>
Covent Garden,<br></br>
London WC2E 9ED,<br></br>
United Kingdom
            </p>
            </Col>
        </Row>
    </div>
            <button className='bikeicons bikeinfo w-25' onClick={clrall}>Finish</button>
        </div>
    </div>
   
    <Footer/>
    </>
  )
}

export default OrderPlaced