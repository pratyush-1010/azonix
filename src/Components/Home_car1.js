import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Home_car1=()=> {
  return (
    <Carousel fade style={{backgroundColor:"black",marginLeft:"0px"}}>
      <Carousel.Item style={{backgroundColor:"black"}}>
        <img
          className="d-block w-100"
          src="./img/home_car_1.jpg"
          alt=""
          style={{height:"80vh",backgroundColor:"black"}}
        />
        <Carousel.Caption className='carcap'>
          <p className='text-white smp'>UPTO 60% OFF</p>
          <p className='bigp'>BLACK<br></br> FRIDAY SALE</p>
          <Link to={`/shop/allProducts`}>
          <button className='but1'>SHOP COLLECTION</button>
          </Link>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/home_car_2.jpg"
          alt="Second slide"
          style={{height:"80vh"}}

        />

        <Carousel.Caption className='carcap'>
        <p className='text-white smp'>UPTO 60% OFF</p>
          <p className='bigp'>BLACK<br></br> FRIDAY SALE</p>
          <Link to={`/shop/allProducts`}>
          <button className='but1'>SHOP COLLECTION</button>
          </Link>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/home_car_3.jpg"
          alt="Third slide"
          style={{height:"80vh"}}

        />

        <Carousel.Caption className='carcap'>
        <p className='text-white smp'>UPTO 60% OFF</p>
          <p className='bigp'>BLACK<br></br> FRIDAY SALE</p>
          <Link to={`/shop/allProducts`}>
          <button className='but1'>SHOP COLLECTION</button>
          </Link>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home_car1;