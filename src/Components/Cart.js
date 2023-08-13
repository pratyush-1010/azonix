

import React,{useState,useEffect} from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CartItems from './CartItems';
import { Clrdata } from '../Actions/Actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faShoppingBag, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Appbar from './Appbar';
import Footer from './Footer';
const Cart = () => {

  const [isChildRendered, setChildRendered] = useState(false);
  


  const mystate = useSelector((state) => state.count.cart);
  const statecart=useSelector((state) => state.count)
  const [cnt, setCnt] = useState(1);

  const dispatch = useDispatch();

  const clearCart = () => {
   
    dispatch(Clrdata());
  };

  if (mystate.length === 0) {
    return (
      <>
      <Appbar/>
      <div className='text-center pt-5' style={{height:'90vh'}}>

        <h1 className='p-5'>Cart is Empty</h1>
        <p className='cartIcon'>
        <Link to={`/shop/allProducts`} className='cartlink'>
          <FontAwesomeIcon icon={faShoppingCart}>
            </FontAwesomeIcon>
        </Link>
          <h3 className='p-5'>Click on the cart to Add Items</h3>
            </p>
      </div>
      <Footer/>
      </>
    );
  }
  // const total = mystate.reduce((acc, item) => acc + item.proPrice, 0)


  const renderParent = () => {
    setChildRendered(true); // Reset the child rendered state
  };


const buy=()=>{
  localStorage.setItem('statecart',JSON.stringify(mystate))
}

  return (
    <>
    <Appbar/>
    <div className='p-3' style={{height:"100vh"}}>
      <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Col md={2}><h5>Sr.No</h5></Col>
        <Col md={2}><h5>Image</h5></Col>
        <Col md={2}><h5>Name</h5></Col>
        <Col md={2}><h5>Quatity</h5></Col>
        <Col md={2}><h5>Price</h5></Col>
        <Col md={2}></Col>
      </Row>

      {mystate.map((ele, ind) => {
        return (
           <CartItems ele={ele} ind={ind} renderParent={renderParent} cnt={cnt} setCnt={setCnt}/>
        );
      })}

      {/* <Row className='my-2 py-2' style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Col md={2}><h4>Total Price:</h4></Col>
        <Col md={2}></Col>
        <Col md={2}></Col>
        <Col md={2}></Col>

        <Col md={2}><h4> Rs {total.toLocaleString("en-IN")}</h4></Col>
        <Col md={2}></Col>
      </Row> */}

      <button  onClick={clearCart} className='bikeicons bikeinfo'>Clear Cart</button>
     <Link to={`/checkout`}>
      <button className='bikeicons bikeinfo' onClick={buy}>Buy</button>
     </Link>

      {/* <Button className='mx-1'></Button> */}

    </div>
    <Footer/>
    </>
  );
};

export default Cart;
