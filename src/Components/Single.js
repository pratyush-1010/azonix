

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SinPro from './SinPro';
import { Row,Col } from 'react-bootstrap';
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination"
import "swiper/css/effect-coverflow";
import { FreeMode, Navigation, Thumbs ,EffectCoverflow,Pagination} from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupee, faIndianRupeeSign, faRupee, faRupeeSign, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch,useSelector} from 'react-redux';
import { AddToCart } from '../Actions/Actions';
import { incNum,decNum } from '../Actions/CountAct';
import SinproSwipe from './SinproSwipe';
import Singlepro from './Singlepro'
// import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Appbar from './Appbar';
import Footer from './Footer';
const Single = () => {
  const { sin } = useParams();
  const [sinpro, setsinpro] = useState({ null: false });
  const [imgData, setImgData] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
 const [disa, setDisabled] = useState(false)
//  console.log(disa)
  const mycount= useSelector(state=>state.counter);
const[quantity,setQuantity] = useState([])



  // const [cnt, setCnt] = useState(mycount.count);


  const dispatch=useDispatch()
  const getsinpro = () => {
    axios.get(`http://localhost:5000/products/single/${sin}`)
      .then((res) => {
        setsinpro(res.data.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getsinpro();
  }, []);

  useEffect(() => {
    if (sinpro.proImage) {
      const newData = sinpro.proImage.filter((element, index) => ({
        element: element,
        index: index
      }));
      setImgData(newData);
    }
  }, [sinpro.proImage]);

  const AddCart=(value)=>{
    dispatch(AddToCart(value));
    localStorage.setItem('countx',mycount.count)
    mycount.count=1
    
  }


 
      // console.log(mycount.count)
      // console.log(sinpro.stock + " asaasas")
    // if(mycount.count==sinpro.stock){
    //   return(
    //     mycount.count=sinpro.stock
    //   )
    // }

    const Increament = ()=>{
        dispatch(incNum(sinpro.proPrice))
    }

      const Decremeant=()=>{
        dispatch(decNum(sinpro.proPrice))
      }
    
const [imgs,setImgs]=useState(" ")
const setImg=(ele)=>{
    setImgs(ele)
}
console.log(imgs)


  return (
    <>
    <Appbar/>
    <div className='container py-5'>
     <Row>
        <Col md={6} sm={12} className='singleprocar'>
        <Singlepro imgData={imgData}/>
        </Col>


        <Col md={6} sm={12} className='p-5 text-start sinbikeinfo '>
            <h1 className='my-2'>{sinpro.proName}</h1>
            <p className='my-3 prodesc'>{sinpro.proDesc}</p>
            <h4 className='my-3'>Product Code:{sinpro.proSku}</h4>
            <h4 className='my-3'>In Stock:{sinpro.stock}</h4>
            <h4 className='my-3'>Price:Rs {sinpro.proPrice}</h4>

            {/* <button onClick={()=>dispatch(decNum())}>-</button>
        <p>{mycount.count}</p>
      <button onClick={()=>dispatch(incNum())}>+</button> */}
         <Col md={2} className='d-flex justify-content-center'>
          <button className='quabut' disabled={mycount.count === sinpro.stock} onClick={Increament}>+</button>
          <h4>{mycount.count}/{sinpro.stock}</h4>
          <button className='quabut'  onClick={Decremeant}  disabled={mycount.count < 2}>-</button>
        </Col>
          <button className='bikeicons bikeinfo' style={{fontSize:"20px"}}

onClick={()=>AddCart(sinpro,mycount.count)} 

>Add To Cart</button>
        </Col>
     </Row>
     
    </div>
    <Footer/>
</>
  );
};

export default Single;
