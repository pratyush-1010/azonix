import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import "./styles.css";

const Singlepro=({imgData})=> {
  return (
    <div>
   
      <Carousel
        showThumbs={true}
        showStatus={true}
        // infiniteLoop
        emulateTouch
        // autoPlay
        useKeyboardArrows
        transitionTime={1000}
        // axis="vertical"
        selectedItem={0}
        // width="600px"
        
      >
        {/* <div className="slide-holder">
          <iframe src="https://www.youtube.com/embed/n0F6hSpxaFc" />
          <div class="text-container">
            <h2>Skiing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div> */}
  
          {/* <img
            alt=""
            src="https://www.esquireme.com/sites/default/files/styles/full_img/public/images/2019/09/12/super-sport-300-1.jpg?itok=-vED5XoK"
          />
          <div className="text-container">
            <h2>Bugatti Chiron Super Sport 300</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="slide-holder">
          <img
            alt=""
            src="https://im.indiatimes.in/content/2017/Nov/in6_1509613195.jpg"
          />
          <div className="text-container">
            <h2>Hennessey Venom F5</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="slide-holder">
          <img
            alt=""
            src="./img/home_car_2.jpg"
          />
          <div className="text-container">
            <h2>SSC Tuatara: 300+ mph*</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
    </div> */}
        
        {
            imgData.map((img)=>{
                return(
                    <img src={"http://localhost:5000/uploads/"+img}></img>
                )
            })
        }
      </Carousel>
    </div>
  );
}

export default Singlepro

