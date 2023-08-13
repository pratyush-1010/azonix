import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Appbar from './Appbar'
import Footer from './Footer'
import Home_car1 from './Home_car1'
const Contact = () => {
  return (
    <>
    <Appbar/>
    {/* <Home_car1/> */}
    <div className='container p-5 cutt'>

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15070.834025088892!2d72.83972019999999!3d19.2079299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1687158217951!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
style={{width:"100%",height:"500px"}}
></iframe>

<Row className='py-5'>
    <Col md={9} className='text-start'>
        <h3 className='mb-4 ms-3'>Get In Touch</h3>
        {/* <label>Name</label><br></br> */}
        <input type="text" className='inpf' placeholder='Your Name'/>
        {/* <label>Email</label><br></br> */}
        <input type="email" className='inpf' placeholder='Your Email'/>
        <input type="text" className='inpf' placeholder='Phone Number'/>
        <textarea placeholder='Your Message...' className='texta'>

        </textarea>
        <button className='bikeinfo bikeicons ms-2 py-2 px-3'>Send Message</button>

    </Col>
    <Col md={3} className="text-start py-3 ps-3">
        <h5>Address</h5>
        <p>14 LE Gounlburn St, Sydney 1198NSA.</p>
        <hr></hr>
        <h5>Phone</h5>
        <p>(+089) 19918989</p>
        <hr></hr>
        <h5>Email</h5>
        <p>support@domain.com</p>
        <hr></hr>
        <h5>Shop Time</h5>
        <p>8:00Am – 10:00Pm, Sunday Close</p>
        <hr></hr>
        <h5>Fax</h5>
        <p>01234567</p>
    </Col>

</Row>
    </div>
    <Footer/>
</>
  )
}

export default Contact