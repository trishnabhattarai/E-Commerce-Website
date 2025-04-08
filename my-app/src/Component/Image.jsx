import React from 'react'
import Createaccount from './Createaccount'
import Service from './Service'




export default function Image() {
  return (
   <>
   <div className="d-flex align-items-stretch">
   <div className="p-2">
   <img src="./photo/3.png" alt="..." style={{height:"500px",marginLeft:"40px"}}/>
   </div>
  <div className="p-2">
  <img src="./photo/2.png" alt="..." style={{height:"250px",width:"500px", marginLeft:"120px"}}/>
  <p className="fw-bolder" style={{marginLeft:"235px", marginTop:"40px"}}>Top Brands On Offer Price* </p>
  <p className="text-center" style={{marginLeft:"100px"}}>A website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.</p>
<Createaccount/>
  </div>
  <div className="p-2">
  <img src='./photo/1.png' alt="Example" style={{marginLeft:"150px",marginRight:"0px", marginTop:"0px",height:"500px",width:"250px"}}/>

  </div>
   </div>

  <Service/>
  
</>
     
  )
}
