import React from 'react'

const Card2 = ({ele,imgData1}) => {
    console.log(imgData1)
  return (
    <div className='prohigh1 text-center m-3'>
    <div className='prohigh2'>

            <h2 className='text-center prohighname'>{ele.proName}</h2>
    </div>
    {/* {
        imgData1.map((img1,ind)=>{
            return(
                <img src={"http://localhost:5000/uploads/"+img1}/>
            )
        })

    } */}
                <img src={"http://localhost:5000/uploads/"+ele.proImage[0]} style={{height:"300px",width:"300px"}}/>

        {/* <img src={"http://localhost:5000/uploads/"+imgData1[0]} className='catimg' ></img> */}
       
        
    </div>
  )
}

export default Card2