// import React, { useRef, useState,useEffect} from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination,Navigation } from "swiper";

// import axios from "axios";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";


// // import "./styles.css";

// // import required modules
// import { Pagination,Navigation } from "swiper";
// import Card1 from "./Card1";
// import { Link } from "react-router-dom";
// import BikeCard from "./BikeCard";
// // import axios from "axios";

// const Home_car2=()=> {
// const [cat,setCat]=useState([])
// const getCategories=()=> {
//     axios.get(`http://localhost:5000/category/allCategories`)

//     .then((res)=>{
//         setCat(res.data.data)
//     })
//     .catch(err=>console.log(err))

// }
// useEffect(()=>{
//     getCategories();
// },[])
// console.log(cat)

//   return (
//     <>
//       <Swiper style={{height:"400px"}}
//         slidesPerView={3}
//         spaceBetween={0}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={{
//             clickable: true,
//         }}
//         breakpoints={{
//           320: {
//             slidesPerView: 1,
//             // spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             // spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 4,
//             // spaceBetween: 50,
//           },
//         }}
//         rewind={true}
//         modules={[Pagination,Navigation]}
//         className="mySwiper"
//       >
//        {
//         cat.map((ele,ind)=>{
//             return(
//                 <SwiperSlide>
//                    <Link to={`/product/${ele._id}`}>
//                     <Card1 ele={ele}/>
//                    </Link>
                    
//                 </SwiperSlide>
//             )
//         })
//        }
      
//       </Swiper>
//     </>
//   );
// }

// export default Home_car2



import React, { useRef, useState,useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card1 from './Card1'
// import './styles.css';

// import required modules
import { Pagination,Navigation} from 'swiper/modules';

const Home_car2=()=> {

    const [cat,setCat]=useState([])
    const getCategories=()=> {
        axios.get(`http://localhost:5000/category/allCategories`)
    
        .then((res)=>{
            setCat(res.data.data)
        })
        .catch(err=>console.log(err))
    
    }
    useEffect(()=>{
        getCategories();
    },[])
    console.log(cat)
    

  return (
    <Swiper style={{height:"400px"}}
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation={{
            clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            // spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            // spaceBetween: 50,
          },
        }}
        rewind={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
       {
        cat.map((ele,ind)=>{
            return(
                <SwiperSlide>
                   <Link to={`/shop/${ele._id}`}>
                    <Card1 ele={ele}/>
                   </Link>
                    
                </SwiperSlide>
            )
        })
       }
      
      </Swiper>
    
      )
    }
    

export default Home_car2;

