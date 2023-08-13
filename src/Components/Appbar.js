import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Userdd from './Userdd'
import { useEffect, useState } from 'react';
import Search from './Search';
function BasicExample() {
  const mystate= useSelector((state)=>state.count.cart);

  const [auth, setAuth] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    setAuth(!!token);
  }, [token]);

  return (
    <Navbar bg="black" variant='dark' expand="lg" style={{position:"sticky",top:"0",zIndex:"10"}}>
      <Container>
        <Navbar.Brand className='me-auto brand'>AZONIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto pt-2">
            <NavLink to="/" className='nav-link mx-3'>Home</NavLink>
            <NavLink to="/shop/allProducts" className='nav-link mx-3'>Shop</NavLink>
            <NavLink to="/about" className='nav-link mx-3'>About</NavLink>
            <NavLink to='/contact' className='nav-link mx-3'>Contact</NavLink>
{/*           
          </Nav>
        <Nav className="ms-auto"> */}
            <NavLink  className='nav-link mx-3'><Search/></NavLink>
            <NavLink  className='nav-link mx-3'>
            { <Userdd />}
            
               </NavLink>
            <NavLink to="/cart" className='nav-link mx-3'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            <sup style={{fontWeight:"bold",fontSize:"15px"}}>{mystate.length}</sup>
            </NavLink>
            {/* <NavLink to='/signup' className='nav-link mx-3'>Sign Up</NavLink>
            <NavLink to='/login' className='nav-link mx-3'>Login</NavLink> */}
            {/* <NavLink to='/admin' className='nav-link'>Admin</NavLink> */}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;