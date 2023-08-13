import React, { useState } from 'react'
import Footer from './Footer'
import Appbar from './Appbar'
import { Button, Row,Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const Checkout = () => {
   
    const [disable,setDisable]=useState("false")
    const[pointer,setPointer]=useState("pointer")
    const userinfoString = localStorage.getItem('statecart');
    const cnt = localStorage.getItem('count1');
    const navigate=useNavigate()
    const [userdetails,setUserdetails] =useState({
        fname:'',
        lname:'',
        country:'',
        street:'',
        town:'',
        pin:'',
        email:'',
        pom:''
    })

    
    
    // Convert the string back to an array using JSON.parse()
    const userinfo = JSON.parse(userinfoString);
    console.log(userinfo)
    const remove=()=>{
        localStorage.removeItem('statecart')
    }
    if(userinfo.length == 0){
        return(
            <div>
                Empyt
            </div>
        )
    }
    const total = userinfo.reduce((acc, item) => acc + item.proPrice, 0)

   

    const ochand=(event)=>{
        const { name, value } = event.target;
        setUserdetails((prevInfo) => ({
          ...prevInfo,
          [name]: value
        }));
        

    }

    const place= async(e)=>{
        // if(userdetails.fname ==" " || userdetails.lname ==" " || userdetails.street==" "  ){
            
            
        //     setDisable("true")
        //     setPointer("not-allowed")
            
        // }
        // e.preventDefault()
        localStorage.setItem("final",JSON.stringify(userdetails))
        localStorage.setItem("subtotal",JSON.stringify(total))
        navigate('/orderplaced');
    }
  return (

    <>
    <Appbar/>
    <div className='cutt container py-5'>

    {/* {
        userinfo.map((ele,ind)=>{
            return(
                <>
                <p>{ele.proName}</p>
                <p>{ele.proPrice}</p>
                <p>{ele.stock}</p>
                <p>{cnt}</p>


                </>
            )
        })
    } */}


    {/* <Button onClick={remove}>Remove</Button> */}

    <Row>
        <Col md={6}>
            <form>
                <h1>Billing Details</h1>
                <input type="text" 
                placeholder='First Name'
                className='inpf inpf1 w-75 checkoutf'
                onChange={ochand}
                name='fname'
                value={userdetails.fname}
                >
                </input><br></br>
                <input type="text" 
                placeholder='Last Name'
                className='inpf inpf1 w-75 checkoutf'
                name='lname'
                onChange={ochand}
                value={userdetails.lname}

                >
                </input><br></br>
                <select className='inpf inpf1 w-75 checkoutf' 
                             onChange={ochand}
                             name="country"
                value={userdetails.country}
                
                >
                    
                    <option>Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Spain">Spain</option>

                </select><br></br>
                <textarea className='inpf inpf1 w-75 checkoutf'
                placeholder='Street Address'
                onChange={ochand}
                name='street'
                value={userdetails.street}

                >
                </textarea>
                    <br></br>
                 <input type="text" 
                placeholder='City/Town'
                className='inpf inpf1 w-75 checkoutf'
                onChange={ochand}
                name='town'
                value={userdetails.town}

                >
                </input><br></br>
                <input type="text" 
                placeholder='Post Code'
                className='inpf inpf1 checkoutf w-75'
                onChange={ochand}
                name='pin'
                value={userdetails.pin}

                >
                </input><br></br>
                <input type="email" 
                placeholder='Email Address'
                className='inpf inpf1 checkoutf w-75'
                onChange={ochand}
                name='email'
                value={userdetails.email}

                >
                </input><br></br>
                <select className='inpf inpf1 w-75 checkoutf' 
                             onChange={ochand}
                             name="pom"
                value={userdetails.pom}
                
                >
                    
                    <option>Payment Method</option>
                    <option value="Cod">Cod</option>
                    <option value="Upi">Upi</option>
                    <option value="Bank Tansfer">Bank Transfer</option>
                    <option value="Online Payment">Online Payment</option>

                </select><br></br>
            </form>
        </Col>
        <Col md={6} >
            <h1>Your Order</h1>
            <ul style={{border:"1px solid cyan",listStyle:"none"}} className='text-start p-5'>
                <h3 align="center" className='py-3'>Items</h3>
                {
                    userinfo.map((ele,ind)=>{
                        return(
                            
                            <li  className='my-2' style={{alignItems:"center"}}>
                              <Row>

                                <Col>{ind+1}</Col>
                                <Col><img src={"http://localhost:5000/uploads/"+ele.proImage[0]} style={{height:"80px",width:"80px",border:"1px solid cyan"}}></img></Col>
                                <Col>{ele.proName}</Col>
                                <Col>{"Rs "+ele.proPrice.toLocaleString("en-IN")}</Col>
                              </Row>
                            </li>
                        )
                    })
                }
                <hr style={{color:"cyan",backgroundColor:'cyan',height:"3px"}}></hr>
                <li className='text-center'>
                    <Row>
                    <Col>
                    <h4>
                        Total
                    </h4>
                    </Col>
                    <Col></Col>
                    
                    <Col>
                    <h4>

                   {"Rs "+total.toLocaleString("en-IN")}
                    </h4>
                    </Col>
                    </Row>
                       
                </li>
            </ul>
        </Col>
    </Row>
        {/* <Route path='/orderplaced' element={<OrderPlaced/>}></Route> */}
    
        <button onClick={place}  className='bikeicons bikeinfo w-25 '>
            Place Order
        </button>
    </div>
   <Footer/>
    </>
  )
}

export default Checkout