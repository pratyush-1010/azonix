import { faGlobe, faRecycle, faShield, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Row,Col } from 'react-bootstrap'
const Free = () => {
  return (
    <div className='container p-4 cutt'>

    <div className='row text-start gx-5'>
        <div  className='freecol m-3 p-5 col d-flex' >
            <p className='threeIcons mx-2'>
                <FontAwesomeIcon icon={faGlobe}/>
            </p>
            <div className='m-2'>
                <h5>FREE EXPRESS SHIPPING</h5>
                <p className='text-muted'>Free Shipping Over Rs 5,000</p>
            </div>
        </div>
        <div  className='freecol m-3 p-5 col d-flex'>
            <p className='threeIcons mx-2'>
        <FontAwesomeIcon icon={faShieldHalved}/>
            </p>
            <div className='m-2' >
                <h5>SECURE PAYMENTS</h5>
                <p className='text-muted'>Clear pricing and fast payouts</p>
            </div>
        </div>
        <div  className='freecol m-3 p-5 col d-flex'>
            <p className='threeIcons mx-2'>
        <FontAwesomeIcon icon={faRecycle}/>
            </p>
            <div className='m-2'>
                <h5>30 DAY RETURN</h5>
                <p className='text-muted'>Return 30 days of purchase</p>
            </div>
        </div>
    </div>
     </div>

  )
}

export default Free