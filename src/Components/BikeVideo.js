import React from 'react'
import { Link } from 'react-router-dom'

const BikeVideo = () => {
  return (
    <div className='pb-3 bikevid' style={{position:"relative"}}>
        <video autoplay='autoplay' muted loop='loop' id="myVideo" className='backvid' >
            <source src="./img/vid1.mp4" type="video/mp4"/>
        </video>
        <div className='vidinfo'>
            <p className='p1vi pvi'>Java Veloce 3 Disc Shimano Sora</p>
            <p className='p2vi pvi'>Your next adventure awaits</p>
            <Link to={`/singlepro/64830f17ca1b0a9827937465`}>
            <button className='but1'>Shop Now</button>
            </Link>
        </div>
    </div>
  )
}

export default BikeVideo