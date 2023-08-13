
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEyedropper } from '@fortawesome/free-solid-svg-icons';
const Login = () => {
  const [nameplace,setNamePalce] = useState("Username");
  const [passplace,setPassPalce] = useState("Password");
  const [userinfo,setUserinfo] = useState([])
  const [eye,setEye]=useState(faEyeSlash)
  const [type,setType]=useState("password")
  const [dispU,setDispU]=useState("none")
  const [dispP,setDispP]=useState("none")
  const [top,setTop]=useState("")
  const login1=localStorage.getItem("statecart")
  const nlogin1=JSON.parse(login1)
 useEffect(()=>{

   axios.get(`http://localhost:5000/user/all`)
   .then((res)=>{
     setUserinfo(res.data.users)
    })
    .catch((err)=>console.log(err))
  })
    // console.log(userinfo)

    const [info, setInfo] = useState({
      username: '',
      userpass: ''
    });


// console.log(sinUsername)
  const ocHand = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    // const { username, userpass } = info;

    // console.log(username, userpass);



    const  userName = info.username
    const userPassword = info.userpass
   if(info.username==="" || info.userpass==""){
    return(
      // alert("Please enter Username and Password")
      setNamePalce("Required*"),
      setPassPalce("Required*"),
    setPlaceholderPass('red'),
    setPlaceholderName('red')


    )
   }


  
  
 


    try {
      const response = await axios.post('http://localhost:5000/user/login', { userName, userPassword }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("user",response.data.user._id);
       

        // navigate('/checkout')
      // console.log(response.data);
      // console.log(response.data);
      if(nlogin1){
        return(
          navigate('/checkout')
        )
       }

    else if(!nlogin1){
      return(
        navigate('/')
      )
    }

    } catch (error) {
      console.log(error);
    }
  
  
    const sinUsername=userinfo.find((ele)=> ele.userName == info.username)
    const sinUserpass=userinfo.find((ele)=> ele.userPassword !== info.userpass)


    // if(!sinUsername && sinUserpass || sinUsername && !sinUserpass){
    //   return(
    //     info.username="",
    //     setNamePalce("Invalid Username !!"),
    //   setPlaceholderName('red'),
    //   info.userpass="",
    //     // setType("Text"),
    //     setPassPalce("Invalid Password !!"),
    //   setPlaceholderPass('red')
    //   )
    //  }

    
         if(sinUsername){
    return(
      // setDispP("block")
      info.userpass="",
      // setType("Text"),
      setPassPalce("Invalid Password !!"),
    setPlaceholderPass('red')
    
    )
    
   }
     if(sinUserpass){
    return(
    
      // setDispU("block")
      info.username="",
      setNamePalce("Invalid Username !!"),
    setPlaceholderName('red')


    )
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


  

  return (
    <div className='cutt p-5 signup2' style={{ height: '100vh' }}>
      {/* <button onClick={handleButtonClick}></button> */}
      <form style={{ marginTop: '10%',position:"relative"}}>
        <h1 className='text-white'>Login</h1>
        <input
          type='text'
          placeholder={nameplace}
          className={`custom-input ${placeholderName} inpf inpf1` }
          name='username'
          value={info.username}
          onChange={ocHand}
        />
        <p className='text-danger' style={{display:dispU}}>Invalid Username</p>
        <br />
        <input
          type={type}
          placeholder={passplace}
          className={`custom-input ${placeholderPass} inpf inpf1` }
          name='userpass'
          value={info.userpass}
          onChange={ocHand}
          // style={{}}
        />
        <h3 className='text-danger' style={{display:dispP}}>Invalid Password</h3>

        <FontAwesomeIcon icon={eye} className='eye'
        onClick={changeEye}
      
        ></FontAwesomeIcon>
       
        <br />
        <button className='inpf inpf1 userbutton' onClick={login}>Login</button>
        <Link to={`/signup`} className='redirect'>
          <p>Create New Account</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;


// import React,{useEffect, useState} from 'react';
// import { Formik } from 'formik';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash, faEyedropper } from '@fortawesome/free-solid-svg-icons';
// const Login = () => {

//   const [nameplace,setNamePalce] = useState("Name");
//     const [passplace,setPassPalce] = useState("Password");
//     const [userinfo,setUserinfo] = useState([])
//     const [eye,setEye]=useState(faEyeSlash)
//     const [type,setType]=useState("password")


//    useEffect(()=>{
  
//      axios.get(`http://localhost:5000/user/all`)
//      .then((res)=>{
//        setUserinfo(res.data)
//       })
//       .catch((err)=>console.log(err))
//     })
//       console.log(userinfo)
//     const [info, setInfo] = useState({
//       username: '',
//       userpass: ''
//     });
  
//     const ocHand = (event) => {
//       const { name, value } = event.target;
//       setInfo((prevInfo) => ({
//         ...prevInfo,
//         [name]: value
//       }));
//     };
//     const navigate = useNavigate();
  
//     const login = async (e) => {
//       e.preventDefault();
//       // const { username, userpass } = info;
  
//       // console.log(username, userpass);
  
//       const  userName = info.username
//       const userPassword = info.userpass
//     //  if(info.username==="" || info.userpass==""){
//     //   return(
//     //     // alert("Please enter Username and Password")
//     //     setNamePalce("Required*"),
//     //     setPassPalce("Required*")
//     //   )
//     //  }
    
     
  
//       try {
//         const response = await axios.post('http://localhost:5000/user/login', { userName, userPassword }, {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });
//           localStorage.setItem("token",response.data.token);
//           localStorage.setItem("user",response.data.user._id);
         
  
//           navigate('/checkout')
//         // console.log(response.data);
//         // console.log(response.data);
  
//       } catch (error) {
//         console.log(error);
//       }
      
//     };
//     const changeEye=()=>{
//       if(eye==faEyeSlash){
//         setEye(faEye)
//         setType("text")
//       }
//       else{
//         setEye(faEyeSlash)
//         setType("password")
//       }
//     }


// return(

  
//   <div className='cutt p-5 signup2' style={{ height: '100vh' }}>
//     {/* <h1>Anywhere in your app!</h1> */}
//     <Formik
   
//       initialValues={{ email: '', password: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//           ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//       >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}
        
//         style={{ marginTop: '10%',position:"relative"}}>
//            <h1 className='text-white'>Login</h1>
//           <input
//             type="text"
//             name="text"
//             placeholder='Username'
//             onBlur={handleBlur}
//             value={info.username}
//             className='inpf inpf1'
//           onChange={ocHand}


//           /><br></br>
//           {errors.email && touched.email && errors.email}
//           <input
//             type={type}
//             name="password"
//             placeholder='Password'
//             onChange={ocHand}
//             onBlur={handleBlur}
//             value={info.password}
//             className='inpf inpf1'
//             />
//            <FontAwesomeIcon icon={eye} className='eye'
//         onClick={changeEye}
//         ></FontAwesomeIcon>
//         <br></br>
//           {errors.password && touched.password && errors.password}
//           <button className='inpf inpf1 userbutton' onClick={login}>Login</button>
//         </form>
//       )}
//     </Formik>
//   </div>
// )
// };

// export default Login;



// import React, { useEffect, useState } from 'react';
// import { Formik } from 'formik';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash, faEyedropper } from '@fortawesome/free-solid-svg-icons';

// const Login = () => {
//   const [nameplace, setNamePalce] = useState('Name');
//   const [passplace, setPassPalce] = useState('Password');
//   const [userinfo, setUserinfo] = useState([]);
//   const [eye, setEye] = useState(faEyeSlash);
//   const [type, setType] = useState('password');

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/user/all')
//       .then((res) => {
//         setUserinfo(res.data);
//       })
//       .catch((err) => console.log(err));
//   });

//   const [info, setInfo] = useState({
//     username: '',
//     userpass: ''
//   });

//   const ocHand = (event) => {
//     const { name, value } = event.target;
//     setInfo((prevInfo) => ({
//       ...prevInfo,
//       [name]: value
//     }));
//   };

//   const navigate = useNavigate();

//   const login = async (e) => {
//     e.preventDefault();

//     const userName = info.username;
//     const userPassword = info.userpass;

//     try {
//       const response = await axios.post(
//         'http://localhost:5000/user/login',
//         { userName, userPassword },
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//       );

//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('user', response.data.user._id);

//       navigate('/checkout');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const changeEye = () => {
//     if (eye === faEyeSlash) {
//       setEye(faEye);
//       setType('text');
//     } else {
//       setEye(faEyeSlash);
//       setType('password');
//     }
//   };

//   return (
//     <div className="cutt p-5 signup2" style={{ height: '100vh' }}>
//       <Formik
//         initialValues={{ username: '', password: '' }}
//         validate={(values) => {
//           const errors = {};
//           if (!values.username) {
//             errors.username = 'Required';
//           }
//           if (!values.password) {
//             errors.password = 'Required';
//           }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting
//         }) => (
//           <form
//             onSubmit={handleSubmit}
//             style={{ marginTop: '10%', position: 'relative' }}
//           >
//             <h1 className="text-white">Login</h1>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               onBlur={handleBlur}
//               value={values.username}
//               className="inpf inpf1"
//               onChange={handleChange}
//             /><br></br>
//             {errors.username && touched.username && (
//               <div className='text-danger'>{errors.username}</div>
//             )}

//             <input
//               type={type}
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.password}
//               className="inpf inpf1"
//             /><br></br>
//             <FontAwesomeIcon
//               icon={eye}
//               className="eye"
//               onClick={changeEye}
//             />
//             {errors.password && touched.password && (
//              <div className='text-white' style={{fontWeight:"bold"}}>{errors.password}*</div>

//             )}

//             <button
//               className="inpf inpf1 userbutton"
//               type="submit"
//               disabled={isSubmitting}
//               onClick={login}
//             >
//               Login
//             </button>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Login;

