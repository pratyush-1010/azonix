// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// const Userdd=()=> {
//     const navigate = useNavigate()
//     const onLogout = () => {
//         localStorage.removeItem('token')
//         navigate('/login')
//     }
//   return (
//     <DropdownButton id="dropdown-basic-button" title={<FontAwesomeIcon icon={faUser} className="" 
//     style={{border:"none",backgroundColor:"transparent",color:"cyan"}}>
            
//     </FontAwesomeIcon>}>

//       <Dropdown.Item><Button className='bg-danger' onClick={onLogout}>Logout</Button></Dropdown.Item>
    
//     </DropdownButton>
//   );
// }

// export default Userdd;






// import React, { useEffect, useState } from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useNavigate } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import axios from 'axios';

// const Userdd = () => {
//   const navigate = useNavigate();
//   // const [username, setUsername] = useState('');

//   // useEffect(() => {
//   //   // Fetch username from API
//   //   fetchUsername();
//   // }, []);

//   // const fetchUsername = async () => {
//   //   try {
//   //     const response = await fetch('http://localhost:5000/user/login');
//   //     const data = await response.json();

//   //     // Assuming the response contains the username in a property called 'username'
//   //     const fetchedUsername = data.username;
//   //     setUsername(fetchedUsername);
//   //   } catch (error) {
//   //     console.log('Error fetching username:', error);
//   //   }
//   // };

//   const onLogout = () => {
//     localStorage.removeItem('user')
//     localStorage.removeItem('token');
//     navigate('/login');
//   };
//   const sinUser = localStorage.getItem('user');
//   console.log(sinUser);
  
//   const [allUsers,setAllUsers] = useState([])

//   const getAllusers=()=>{
//     axios.get('http://localhost:5000/user/all')
//     .then((res)=>{
//       setAllUsers(res.data.users)
//     //
//   }).catch((err)=> console.log(err))
// }
// useEffect(()=>{
//   getAllusers()
// },[])
 
//   return (
//     <DropdownButton
//       id="dropdown-basic-button"
//       title={
//         // <div className="d-flex align-items-center">
//         //   <span className="mr-2">{username}</span>
//           <FontAwesomeIcon
//             icon={faUser}
//             className=""
//             style={{
//               border: 'none',
//               backgroundColor: 'transparent',
//               color: 'cyan',
//             }}
//           />
//         // </div>
//       }
  
//     >
//               {
//         allUsers.filter(elem=>elem._id === sinUser).map((elem, index)=>{
  
//     return(
//       <div key={index}>
//         {elem.userName}
//       </div>
//     )
//         })
//       }
//       <Dropdown.Item>
//         {/* <p>{username}</p> */}
//         <Button className="bg-danger" onClick={onLogout}>
//           Logout
//         </Button>

//       </Dropdown.Item>
     
//     </DropdownButton>
//   );
// };

// export default Userdd;


import NavDropdown from 'react-bootstrap/NavDropdown';
import { faEdit, faFileEdit, faPenToSquare, faPencil, faUser, faUserCircle, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Userdd=()=> {
 const navigate=useNavigate()
  const onLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token');
    navigate('/login');
  };
  const sinUser = localStorage.getItem('user');
  console.log(sinUser);
  
 
  const [allUsers,setAllUsers] = useState([])

  const getAllusers=()=>{
    axios.get('http://localhost:5000/user/all')
    .then((res)=>{
      setAllUsers(res.data.users)
    //
  }).catch((err)=> console.log(err))
}
useEffect(()=>{
  getAllusers()
},[])

const deleteuser=()=>{
axios.delete(`http://localhost:5000/user/delete/${sinUser}`)
localStorage.removeItem('user')
localStorage.removeItem('token');
navigate('/login');
}

const lo=localStorage.getItem('token');

if(!lo){
  return(

    <div className='userdd'>

    <NavDropdown
      id="nav-dropdown-dark-example"
      title={<FontAwesomeIcon icon={faUser} className="fauser" 
          style={{border:"none",backgroundColor:"transparent",textAlign:"center"}}>
                  
          </FontAwesomeIcon>}
      menuVariant=""
      className='text-center'
      >
      {/* <NavDropdown.Item>
      </NavDropdown.Item> */}
      <NavDropdown.Item>
      <Link to={`/signup`} style={{textDecoration:"none",color:"cyan"}}>
      Signup
      </Link>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>
      <Link to={`/login`} style={{textDecoration:"none",color:"cyan"}}>
      Login
      </Link>
     
      </NavDropdown.Item>
     
    </NavDropdown>
 
        </div>

  )
}


  return (
   <div className='userdd'>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title={<FontAwesomeIcon icon={faUser} className="fauser" 
                  style={{border:"none",backgroundColor:"transparent",textAlign:"center"}}>
                          
                  </FontAwesomeIcon>}
              menuVariant=""
              className='text-center'
              >
              {/* <NavDropdown.Item>
              </NavDropdown.Item> */}
              <NavDropdown.Item>
              <FontAwesomeIcon icon={faUserCircle} style={{height:"20px",color:"white"}}></FontAwesomeIcon ><br></br>

              {
                allUsers.filter(elem=>elem._id === sinUser).map((elem, index)=>{
                  
                  return(
                    
                    <div key={index} style={{display:"flex",justifyContent:"center"}}>
                      <p style={{color:"white"}}>
                    {elem.userName}
                      </p>
                        <Link to={`/edituser`}>
                        <FontAwesomeIcon icon={faPenToSquare} className='ms-2'></FontAwesomeIcon>
                        </Link>
                     </div>
                    
    )
  })
}
              </NavDropdown.Item>
              <NavDropdown.Item>
             {
               allUsers.filter(elem=>elem._id === sinUser).map((elem, index)=>{
                 
                 return(
                   <div key={index}>
                    <p style={{color:"white"}}>

                  {elem.userEmail}
                    </p>
                  
                  </div>
                )
                    })
                  }
             
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <button className="but2 py-2" onClick={onLogout}>
              Logout
             </button>
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item >
              <button className="but2" onClick={deleteuser}>
              Delete User
             </button>
              </NavDropdown.Item> */}
            </NavDropdown>
         
                </div>
  );
}

export default Userdd;
