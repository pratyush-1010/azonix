import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Row,Col } from 'react-bootstrap'
import BikeCard from './BikeCard'
const Cat = () => {
    const {cat}=useParams()
    const [catpro,setCatpro]=useState([])
const getCategorypro=()=> {
    axios.get(`http://localhost:5000/products/${cat}`)

    .then((res)=>{
        setCatpro(res.data.data)
    })
    .catch(err=>console.log(err))

}
useEffect(()=>{
    getCategorypro();
},[])

// console.log(catpro)
  return (
    <div className='container p-5'>
        
   


        <Row className='g-4'>
        {catpro.map((bikes,index)=>{
            return(
                <>
                <Col md={12} className=''>
                {/* <Link to={`/sinpro/${bikes._id}`}> */}
                <BikeCard bikes={bikes}/>
                {/* </Link> */}
                </Col>
                </>
                )
            })}
            </Row>

           

    </div>
  )
}

export default Cat