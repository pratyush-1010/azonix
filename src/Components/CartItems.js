// import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useEffect, useState } from 'react'
// import { Row,Col } from 'react-bootstrap'
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { REMOVER } from '../Actions/Actions';
// import { connect } from 'react-redux';
// import Cart from './Cart';



// const CartItems = ({ele,ind,renderParent}) => {
//   // const [isComponentVisible, setComponentVisible] = useState(false);

  
//   const dispatch=useDispatch()
//   const Dlt=(id)=>{
//     dispatch(REMOVER(id))
//     // backhome("/")
//   }
//   const mystate = useSelector((state) => state.count.cart);

  
//     const [cnt,setCnt]=useState(1)
//     const [np,setNp]=useState(ele.proPrice)
//     const countPul=()=>{
//       setCnt(cnt+1)
//       setNp(np+ele.proPrice)
//       renderParent()
//       // setComponentVisible(true);
//       if(cnt==ele.stock){
//         setCnt(ele.stock)
//         setNp(np)

//       }
//     }
//     const countMin=()=>{
//       setCnt(cnt-1)
//       setNp(np-ele.proPrice)
//       renderParent()
//       // setComponentVisible(true);
//       if(cnt==1){
//         setCnt(1)
//         setNp(ele.proPrice)
//       }
//     }
    

// //   const mytotal = useSelector((state) => state.count.total);
// // console.log(mytotal)
// // 



  



//   return (
//     <>
//     <Row className=' my-2 py-2' style={{alignItems:"center",justifyContent:"center",border:"1px solid cyan"}}>
//                 <Col md={2}>
//                 <h4>{ind+1}</h4>
//                 </Col>
//               <Col md={2}>
//               <img src={"http://localhost:5000/uploads/"+ele.proImage[0]} style={{height:"80px",width:"80px"}}></img>
//               </Col>
//               <Col md={2}>
//               <h4>{ele.proName}</h4>
//               </Col>
//               <Col md={2} className='d-flex justify-content-center'>
//                 <button className='quabut' onClick={countPul}>+</button>
//               <h4>{cnt}/{ele.stock}</h4>
//               <button className='quabut' onClick={countMin}>-</button>

//               </Col>
             
//               <Col md={2}>
//               <h4>Rs {np.toLocaleString("en-IN")}</h4>
//               </Col>
//               <Col md={2}>
//                 <button onClick={()=>Dlt(ele._id)}>
//                 <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
//                 </button>
//               </Col>
//               </Row>
          
        
//     </>
//   )
// }

// export default CartItems



import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch,useSelector} from 'react-redux';
import { REMOVER } from '../Actions/Actions';
// import { incNum,decNum } from '../Actions/Actions';
const CartItems = ({ ele, ind, renderParent }) => {
  // const mycount= useSelector(state=>state.count.quantity);

  const dispatch = useDispatch();
const countx=localStorage.getItem('countx');
  
  const [cnt, setCnt] = useState(countx);
  const [np, setNp] = useState(ele.proPrice);

  useEffect(() => {
    // Retrieve count and price from local storage when component mounts
    const storedCnt = localStorage.getItem(`count_${ele._id}`);
    const storedNp = localStorage.getItem(`price_${ele._id}`);
    if (storedCnt && storedNp) {
      setCnt(parseInt(storedCnt));
      setNp(parseFloat(storedNp));
    }
  }, [ele._id]);
  
  useEffect(() => {
    // Update local storage when count and price change
    localStorage.setItem(`count_${ele._id}`, cnt);
    localStorage.setItem(`price_${ele._id}`, np);
  }, [ele._id, cnt, np]);
  
  const countPul = () => {
      setCnt( cnt + 1);
      setNp(np + ele.proPrice);
      // renderParent();
      if (cnt === ele.stock) {
          setCnt(ele.stock);
          setNp(np);
        }
      };
      
      const countMin = () => {
          setCnt(cnt-1);
          setNp(np- ele.proPrice);
          renderParent();
          if (cnt === 1) {
              setCnt(1);
              setNp(ele.proPrice);
            }
          };
          
          const Dlt = (id) => {
            dispatch(REMOVER(id));
          };
     
          
//   const Increament = (proPrice)=>{
//     dispatch(incNum(proPrice))

   
//         if (cnt === ele.stock) {
//           setCnt(ele.stock);
//           setNp(np);
//         }
// }

  // const Decremeant=(proPrice)=>{
  //   dispatch(decNum(proPrice))
  
  //   if (cnt === 1) {
  //     setCnt(1);
  //     setNp(ele.proPrice);
  //   }
  // }

// localStorage.setItem("count1",cnt)
  return (
    <>
      <Row className=' my-2 py-2' style={{ alignItems: 'center', justifyContent: 'center', border: '1px solid cyan' }}>
        <Col md={2}>
          <h4>{ind + 1}</h4>
        </Col>
        <Col md={2}>
          <img src={"http://localhost:5000/uploads/" + ele.proImage[0]} style={{ height: '80px', width: '80px' }} alt="Product" />
        </Col>
        <Col md={2}>
          <h4>{ele.proName}</h4>
        </Col>
        <Col md={2} className='d-flex justify-content-center'>
          {/* <button className='quabut' onClick={countPul}>+</button> */}
          <h4>{cnt}</h4>
          {/* <button className='quabut' onClick={countMin}>-</button> */}
        </Col>
        <Col md={2}>
          <h4>Rs {np.toLocaleString("en-IN")}</h4>
        </Col>
        <Col md={2}>
          {/* <button onClick={() => Dlt(ele._id)}> */}
            <FontAwesomeIcon icon={faTrashCan} onClick={() => Dlt(ele._id)}/>
          {/* </button> */}
        </Col>
      </Row>
    </>
  );
};

export default CartItems;
