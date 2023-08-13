import React from 'react'
import Home_car1 from './Home_car1'
import Home_car2 from './Home_car2'
import BikeVideo from './BikeVideo'
import ProHigh from './ProHigh'
import Free from './Free'
import Cutting from './Cutting'
import Appbar from './Appbar'
import Footer from './Footer'
import Helmet from './Helmet'
const Home = () => {
  return (
    <>
    <Appbar/>
    <Home_car1/>
    <div style={{height:"400px"}} className='p-5 hd2'>
        <h1 className='my-4 text-white'>BIKES FOR LIFE</h1>
        <p className='text-white my-5 '>My Ride is the largest national network of independently owned, specialist cycling stores that<br></br>
provide every rider with the best brands, best service and best advice anywhere</p>
<button className='px-3 py-2 mb-2 but2'>READ MORE</button>
    </div>
    <Home_car2 />
    <Helmet/>
    <BikeVideo/>
    <ProHigh/>
    <Free/>
    <Cutting/>
    <Footer/>
    </>
  )
}

export default Home