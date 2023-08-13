import { faArrowUp, faChevronDown ,faChevronUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Dropdown1 = () => {
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
  <h3  className=''>Categories </h3>
  <FontAwesomeIcon icon={fa} className='mt-2 ms-5' style={{fontSize:"20px"}}/>
      </div>
    <div className=' text-start dropdiv' style={{height:height,display:disp}} >
        <ul style={{listStyle:"none",padding:"0"}}>
            <Link to={`/shop/allProducts`} style={{textDecoration:"none"}}>
            <li>All</li>
            </Link>
            <Link to={`/shop/64818cb49fccaac6528be1f1`} style={{textDecoration:"none"}}>
            <li>E-Bikes</li>
            </Link>
            <Link to={`/shop/64818e019fccaac6528be1f3`} style={{textDecoration:"none"}}>
            <li>Mountain Bikes</li>
            </Link>
            <Link to={`/shop/64818edc9fccaac6528be1f5`} style={{textDecoration:"none"}}>
            <li>Road Bikes</li>
            </Link>
            <Link to={`/shop/64818f3f9fccaac6528be1f7`} style={{textDecoration:"none"}}>
            <li>Kids Bikes</li>
            </Link>
            <Link to={`/shop/64819e1dde3414d5cb6f4738`} style={{textDecoration:"none"}}>
            <li>Men Bikes</li>
            </Link>
            <Link to={`/shop/6481b267de3414d5cb6f479c`} style={{textDecoration:"none"}}>
            <li>Women Bikes</li>
            </Link>
        </ul>
    </div>
    </div>
  )
}

export default Dropdown1