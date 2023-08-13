// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import { FreeMode, Navigation, Thumbs } from "swiper";

// export default function App() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <>
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         <SwiperSlide>
//           <img src={imgData.proImage[0]} />
//         </SwiperSlide>
//         <SwiperSlide>
//         <img src={imgData.proImage[1]} />
//         </SwiperSlide>
//         <SwiperSlide>
//         <img src={imgData.proImage[2]} />
//         </SwiperSlide>
//         <SwiperSlide>
//         <img src={imgData.proImage[3]} />
//         </SwiperSlide>
       
//       </Swiper>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//         <img src={imgData.proImage[0]} />
//         </SwiperSlide>
//         <SwiperSlide>
//         <img src={imgData.proImage[1]} />
//         </SwiperSlide>
//         <SwiperSlide>
//         <img src={imgData.proImage[2]} />
//         </SwiperSlide>
//         <SwiperSlide>
//         <img src={imgData.proImage[3]} />
//         </SwiperSlide>
      
//       </Swiper>
//     </>
//   );
// }
