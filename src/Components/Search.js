
import React,{useState,useEffect} from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ProHigh from './ProHigh'
import axios from 'axios'
import { Row,Col, ModalBody} from 'react-bootstrap'
import Card2 from './Card2'
import ShopCard from './ShopCard'
import Spinner from 'react-bootstrap/Spinner';




const Search=()=> {
  const [show, setShow] = useState(false);

  const [data,setData]=useState('')
    const[disp,setDisp]=useState("none")
    const [sp,setSp]=useState([])
    const [li,setLi]=useState()
    const [not,setNot]=useState('')
    const [suggestions, setSuggestions] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const proname=sp.filter((elem)=>elem.proName)
    console.log(proname)
    const  getSearch=()=>{
  
      axios.get(`http://localhost:5000/products/allProducts`)
      .then((res)=>{
        setSp(res.data.data)
       
        
      })
      .catch((err)=>console.log(err))
      .finally(() => {
    
      });
    }
    
    const filterData = () => {
      
      const filteredResults = sp.filter((data1) =>
      data1.proName.toLowerCase().includes(data.toLowerCase())
      );
      // console.log(filteredResults)
      
      setFilteredData(filteredResults);

    filteredData.length? setDisp("block"): setDisp("none")
    
      
        setLi()
       
      
    };
    // console.log(data)
  
    const handleSuggestions = (value) => {
      const filteredSuggestions = 
      sp.filter((data1) =>
          data1.proName.toLowerCase().includes(value.toLowerCase())
        )
        .map((data1) => data1.proName);
      setSuggestions(filteredSuggestions);
  
    };
    const settli=(suggestion)=>{
      setLi(suggestion)
    }
   
    useEffect(()=>{
      getSearch()
    },[])

   

  return (
    <>
    
      <p onClick={() => setShow(true)}>
      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </p>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      size="xl"
      variant="dark"
      // style={{padding:"0px"}}
      // className='bg-dark'
      
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title" className='d-flex'>

          <input type="text" placeholder='Search Products' 
 onChange={(e)=>{
   setData(e.target.value);
  handleSuggestions(e.target.value);
} } 
  value={li}
  style={{padding:'5px',fontSize:'20px',width:"1000px"}}
  className='sinp text-center'

  ></input>
      <button onClick={filterData} className='bikeicons bikeinfo'>
    Search
      </button>

       
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <div className='container p-2'>

   <Row>
    {
      
     filteredData.map((bikes, ind) => {
       
       return (
         <Col md={6} key={ind} className='my-2'>
        <ShopCard bikes={bikes}/>
      </Col>
    );
  })
  
}
      <h1 className='text-danger cutt text-center' style={{display:disp}}>Product Not Found</h1>
   
  </Row>

  </div>
  


        </Modal.Body>
      </Modal>
    </>
  );
}

export default Search;