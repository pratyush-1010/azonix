import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Row,Col } from 'react-bootstrap'
import BikeCard from './BikeCard'
import ShopCard from './ShopCard'
const Cat = () => {
    const {par}=useParams()
    const [catpro,setCatpro]=useState([])

    const [limit,setLimit]=useState(4)

    // const [disp,setDisp]=useState("flex")
    let disp=" "
const getCategorypro=()=> {
    axios.get(`http://localhost:5000/products/${par}`)

    .then((res)=>{
        setCatpro(res.data.data)
    })
    .catch(err=>console.log(err))

}

const viewMore=()=> {
setLimit(limit+4)
}

if(limit==catpro.length){
    // setDisp("none")
    disp="none"
}

useEffect(()=>{
    getCategorypro();
},[catpro])

// console.log(par)



if(par=="allProducts"){
    return(

        <div className='container p-5'>
        {/* <h1 className='my-5' style={{marginTop:"-100px"}}>Products</h1> */}
        <Row className='g-4'>
            
             
            
          
        {catpro.slice(0,`${limit}`).map((bikes,index)=>{
        // console.log(limit)
            return(
                <>
                <Col md={6} sm={12} className=''>
                {/* <Link to={`/sinpro/${bikes._id}`}> */}
                <ShopCard bikes={bikes}/>
                {/* </Link> */}
                </Col>
                </>
                )
            })}

            </Row>
            <button className='mt-5 bikeinfo bikeicons' onClick={viewMore} style={{display:disp,visibility:disp}}> View More</button>

          
           

    </div>

    )
}
// console.log(catpro)
  return (
    <div className='container p-5'>
        {/* <h1 className='my-5' style={{marginTop:"-100px"}}>Products</h1> */}
        <Row className='g-4'>
            
             
            
          
        {catpro.map((bikes,index)=>{
        
            return(
                <>
                <Col md={6} className=''>
                {/* <Link to={`/sinpro/${bikes._id}`}> */}
                <ShopCard bikes={bikes}/>
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