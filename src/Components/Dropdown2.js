import { faArrowUp, faChevronDown ,faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import {brand1} from './img/brand1'

const Dropdown2 = ({catpro}) => {
  const [height,setHeight] =useState("100%")
  const [disp,setDisp] = useState("block")
  const [fa,setFa]=useState(faChevronDown)
  const close=()=>{
    setHeight('0')
    setDisp('none')
    setFa(faChevronUp)
    if(height=="0"){
        setHeight('100%')
        setDisp('block')
        setFa(faChevronDown)
    }
  }

 
  return (
    <div className='text-start w-75 my-3'>
      <div className='d-flex '  onClick={close}>
  <h3  className=''>Brands </h3>
  <FontAwesomeIcon icon={fa} className='mt-2 ms-5' style={{fontSize:"20px"}}/>
      </div>
    <div className=' text-start dropdiv' style={{height:height,display:disp}} >
        <ul style={{listStyle:"none",padding:"0"}}>
        {/* <Link to={`/shop/Hero`} style={{textDecoration:"none"}}> */}
            <li>Hero</li>
            {/* </Link> */}
            
            <li>AVANTI</li>
         
            <li>TREK</li>
           
            <li>MALVEN STARTS</li>
          
            <li>MERIDA</li>
           
            <li>MONGOOSE</li>
         
            <li>WOLF</li>
            
        </ul>
    </div>
    </div>
  )
}

export default Dropdown2