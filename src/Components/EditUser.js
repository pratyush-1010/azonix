
// import React, { useState,useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { Formik } from "formik";
// import { useDispatch } from "react-redux";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash, faEyedropper } from '@fortawesome/free-solid-svg-icons';

// const EditUser = () => {
//   const sinUser=localStorage.getItem('user');


//     const [allUsers,setAllUsers] = useState([])


//     const getAllusers=()=>{
//       axios.get('http://localhost:5000/user/all')
//       .then((res)=>{
//         setAllUsers(res.data.users)
//       //
//     }).catch((err)=> console.log(err))
//   }
//   useEffect(()=>{
//     getAllusers()
//   },[])


//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [userMobile, setUserMobile] = useState(null);
//   const [userPassword, setUserPassword] = useState("");
//   const [nameplace,setNamePalce] = useState("Name");
//   const [mailplace,setMailPalce] = useState("Email");
//   const [mobplace,setMobPalce] = useState("Moblie");
//   const [passplace,setPassPalce] = useState("Password");
//   const [eye,setEye]=useState(faEyeSlash)
//   const [type,setType]=useState("password")

//   const navigate=useNavigate()
//   const dispatch=useDispatch()

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if(userName==="" || userEmail=="" || userMobile=="" || userPassword==""){
      
//         setNamePalce("Required*")
//         setMailPalce("Required*")
//         setMobPalce("Required*")
//         setPassPalce("Required*")
//         // setNamePalce("Required*")

      
//     }

//     try {
//       const newUser = {
//         userName,
//         userEmail,
//         userMobile,
//         userPassword,
//       };

//       // Make a POST request to the API endpoint to add a new user
//       const response = await axios.post("http://localhost:5000/user/add", newUser);

//       console.log(response.data); // Log the response data

//       // Reset the form
//       setUserName("");
//       setUserEmail("");
//       setUserMobile();
//       setUserPassword("");
//     } catch (error) {
//       console.error(error);
//     }
   
//   };


//   const changeEye=()=>{
//     if(eye==faEyeSlash){
//       setEye(faEye)
//       setType("text")
//     }
//     else{
//       setEye(faEyeSlash)
//       setType("password")
//     }
//   }

  
  
//   allUsers.filter(elem=>elem._id === sinUser).map((elem, index)=>{
//     return(
//        setUserName(elem.userName) 
       
//     )
// })







//   return (
//     <div style={{height:"100vh"}} className=" cutt p-5 signup">

//     <form onSubmit={handleSubmit} className="" style={{marginTop:"6%",position:"relative"}}>
//       <h1 className="text-white">Edit User</h1>
      
//       <input
//         type="text"
//         placeholder={nameplace}
//         value={userName}
//         // onChange={(e) => setUserName(e.target.value)}
//         className='inpf inpf1'
//         />
        
//         <br></br>
//       <input
//         type="email"
//         placeholder={mailplace}
//         value={userEmail}
//         onChange={(e) => setUserEmail(e.target.value)}
//         className='inpf inpf1'
//         /><br></br>
//       <input
//         type="number"
//         placeholder={mobplace}
//         value={userMobile}
//         onChange={(e) => setUserMobile(e.target.value)}
//         className='inpf inpf1'
//         /><br></br>
//       <input
//         type={type}
//         placeholder={passplace}
//         value={userPassword}
//         onChange={(e) => setUserPassword(e.target.value)}
//         className='inpf inpf1'
//         />
//             <FontAwesomeIcon icon={eye} className='eye2'
//         onClick={changeEye}
//         ></FontAwesomeIcon>
//         <br></br>
//       <button type="submit" className='inpf inpf1 userbutton'>Edit User</button>
    
//     </form>

//         </div>
//   );
// };

// export default EditUser;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEyedropper } from '@fortawesome/free-solid-svg-icons';

const EditUser = () => {
  const sinUser = localStorage.getItem('user');
  const [allUsers, setAllUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [nameplace, setNamePlace] = useState("Name");
  const [mailplace, setMailPlace] = useState("Email");
  const [mobplace, setMobPlace] = useState("Mobile");
  const [passplace, setPassPlace] = useState("Password");
  const [eye, setEye] = useState(faEyeSlash);
  const [type, setType] = useState("password");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    axios.get('http://localhost:5000/user/all')
      .then((res) => {
        setAllUsers(res.data.users);
      })
      .catch((err) => console.log(err))
  };

  useEffect(() => {
    const currentUser = allUsers.find((user) => user._id === sinUser);
    if (currentUser) {
      setUserName(currentUser.userName);
      setUserEmail(currentUser.userEmail);
      setUserMobile(currentUser.userMobile);
      setUserPassword();
    }
  }, [allUsers, sinUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userName === "" || userEmail === "" || userMobile === "" || userPassword === "") {
      setNamePlace("Required*");
      setMailPlace("Required*");
      setMobPlace("Required*");
      setPassPlace("Required*");
      return;
    }

    try {
      const updatedUser = {
        userName,
        userEmail,
        userMobile,
        userPassword,
      };

      // Make a PUT request to update the user
      const response = await axios.put(`http://localhost:5000/user/${sinUser}`, updatedUser);
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

  const changeEye = () => {
    if (eye === faEyeSlash) {
      setEye(faEye);
      setType("text");
    } else {
      setEye(faEyeSlash);
      setType("password");
    }
  };

  return (
    <div style={{ height: "100vh" }} className="cutt p-5 signup">
      <form onSubmit={handleSubmit} className="" style={{ marginTop: "6%", position: "relative" }}>
        <h1 className="text-white">Edit User</h1>
        <input
          type="text"
          placeholder={nameplace}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className='inpf inpf1'
        /><br></br>
        <input
          type="email"
          placeholder={mailplace}
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className='inpf inpf1'
        /><br></br>
        <input
          type="number"
          placeholder={mobplace}
          value={userMobile}
          onChange={(e) => setUserMobile(e.target.value)}
          className='inpf inpf1'
        /><br></br>
        <input
          type={type}
          placeholder={passplace}
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          className='inpf inpf1'
        />
        <FontAwesomeIcon
          icon={eye}
          className='eye2'
          onClick={changeEye}
        ></FontAwesomeIcon><br></br>
        <button type="submit" className='inpf inpf1 userbutton'>Save Changes</button>
      </form>
    </div>
  );
};

export default EditUser;
