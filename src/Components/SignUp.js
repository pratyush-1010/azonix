// import React,{useState} from 'react'
// import axios from 'axios';
// const SignUp = () => {

//   //   const [username, setUsername] = useState('');
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [contact, setContact] = useState('');

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     const username=e.target.username.value;
//     const email=e.target.email.value;
//     const contact=e.target.contact.value;
//     const password=e.target.password.value;
//      axios.post(`http://localhost:5000/user/add`,{username,email,contact,password})
//        .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }
//     // const newUser = {
//     //   username: username,
//     //   email: email,
//     //   password: password,
//     // };

//     // axios.post(`http://localhost:5000/user/add`, newUser)
//     // .then((response) => {
//     //   console.log(response.data);
//     // })
//     // .catch((error) => {
//     //   console.error('Error:', error);
//     // });


//   return (
//     <div className='cutt p-5 signup'>
//         <h1 className='text-white'>Create Account</h1>
//         <form onSubmit={handleSignUp}>
//             <input type='text'
//              placeholder='Name'
//               className='inpf inpf1 w-25 my-2'
//               // value={username}
//               // onChange={(e) => setUsername(e.target.value)}
//               name='username'
//               ></input><br></br>

//             <input type='email'
//              placeholder='E-mail'
//               className='inpf inpf1 w-25 my-2'
//               // value={email}
//           // onChange={(e) => setEmail(e.target.value)}
//           name='email'
//               ></input><br></br>

//             <input type='text'
//              placeholder='Contact Number'
//               className='inpf inpf1 w-25 my-2'
//               // value={contact}
//           // onChange={(e) => setContact(e.target.value)}
//           name='contact'
//               ></input><br></br>

//             <input type='password'
//              placeholder='Set Password' 
//              className='inpf inpf1 w-25 my-2'
//             //  value={password}
//           // onChange={(e) => setPassword(e.target.value)}
//           name='password'
//              ></input><br></br>

//             <input type='submit' placeholder='Create Account' className='inpf inpf1 w-25 my-2 bikeicons bikeinfo'></input>
//         </form>
//     </div>
//   )
// }

// export default SignUp




import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEyedropper } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState(null);
  const [userPassword, setUserPassword] = useState("");
  const [nameplace,setNamePalce] = useState("Name");
  const [mailplace,setMailPalce] = useState("Email");
  const [mobplace,setMobPalce] = useState("Moblie");
  const [passplace,setPassPalce] = useState("Password");
  const [eye,setEye]=useState(faEyeSlash)
  const [type,setType]=useState("password")


  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(userName=="" || userEmail=="" || userMobile=="" || userPassword==""){
      
        setNamePalce("Required*")
        setMailPalce("Required*")
        setMobPalce("Required*")
        setPassPalce("Required*")
        setPlaceholderPass('red')
        setPlaceholderName('red')
        setPlaceholderEmail('red')
        setPlaceholderMobile('red')
        // setNamePalce("Required*")

      
    }

    try {
      const newUser = {
        userName,
        userEmail,
        userMobile,
        userPassword,
      };

      // Make a POST request to the API endpoint to add a new user
      const response = await axios.post("http://localhost:5000/user/add", newUser);

      console.log(response.data); // Log the response data

      // Reset the form
      setUserName("");
      setUserEmail("");
      setUserMobile("");
      setUserPassword("");
    } catch (error) {
      console.error(error);
    }
   
  };

  const changeEye=()=>{
    if(eye==faEyeSlash){
      setEye(faEye)
      setType("text")
    }
    else{
      setEye(faEyeSlash)
      setType("password")
    }
  }

  const [placeholderName, setPlaceholderName] = useState('');
  const [placeholderPass, setPlaceholderPass] = useState('');
  const[placeholderMobile, setPlaceholderMobile] =useState('');
const[placeholderEmail, setPlaceholderEmail] = useState('');
  return (
    <div style={{height:"100vh"}} className=" cutt p-5 signup">

    <form onSubmit={handleSubmit} className="" style={{marginTop:"6%",position:"relative"}}>
      <h1 className="text-white">Sign Up</h1>
      <input
        type="text"
        placeholder={nameplace}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className={`custom-input ${placeholderName} inpf inpf1` }

        />
        <br></br>
      <input
        type="email"
        placeholder={mailplace}
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        className={`custom-input ${placeholderEmail} inpf inpf1` }

        /><br></br>
      <input
        type="number"
        placeholder={mobplace}
        value={userMobile}
        onChange={(e) => setUserMobile(e.target.value)}
        className={`custom-input ${placeholderMobile} inpf inpf1` }
       
        /><br></br>
      <input
        type={type}
        placeholder={passplace}
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        className={`custom-input ${placeholderPass} inpf inpf1` }
   
        />
            <FontAwesomeIcon icon={eye} className='eye2'
        onClick={changeEye}
        ></FontAwesomeIcon>
        <br></br>
      <button type="submit" className='inpf inpf1 userbutton'>Sign Up</button>
      <Link to={`/login`} className="redirect">
        <p >
          Already Have an Account?
        </p>
      </Link>
    </form>

        </div>
  );
};

export default SignUp;
