
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
import Card2 from './Card2'
// import './styles.css';

// import required modules
import { Pagination,Navigation} from 'swiper/modules';

const ProHigh=()=> {

  const[all,setAll]=useState([])
    const [imgData1, setImgData1] = useState([]);
      const getallpro=()=>{
          axios.get(`http://localhost:5000/products/allProducts`)
          .then((res)=>{
              setAll(res.data.data)
          })
          .catch(err=> console.error(err))
      }
      useEffect(()=>{
          getallpro()
      },[])
      useEffect(() => {
          if (all.proImage) {
            const newData = all.proImage.filter((element, index) => ({
              element: element,
              index: index
            }));
            setImgData1(newData);
          }
        }, [all.proImage]);


  return (
    <div className='p-5 proHigh1'>
       <h1>Product Highlights</h1>
      <Swiper 
        // style={{height:"400px"}}
            slidesPerView={3}
            // spaceBetween={0}
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
                slidesPerView: 3,
                // spaceBetween: 50,
              },
            }}
            // effect={"coverflow"}
            rewind={true}
            // modules={[Pagination,Navigation,EffectCoverflow]}
        modules={[Pagination,Navigation]}

            
            className="mySwiper"
          >
    
    
          <Row>
    
           {
             all.map((ele,ind)=>{
                return(
                  <Col md={6} sm={12} className='proHigh2'>
                  <SwiperSlide>
                      <Link to={`/singlepro/${ele._id}`}>
                        <Card2 ele={ele} imgData1={imgData1}/>
                      </Link>
                       
                    
                        
                    </SwiperSlide>
                  </Col>
                )
              })
            }
            </Row>
          
          </Swiper>
        </div>
      )
    }
    

export default ProHigh;
