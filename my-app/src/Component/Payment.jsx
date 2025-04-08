import React from 'react'

import SellerAccount from './SellerAccount';
export default function Payment() {
  return (
   <>
   <div className="d-inline-flex flex-row mb-3" style={{marginTop:"100px", backgroundColor:"white", width:"1405px"}}>
  <div className="p-2" style={{marginLeft:"60px"}}>
    Payment Methods
    <p>
    <img src='/photo/cashondelivery.png' alt='' style={{width: "100px", height: "100px"}} />
    <img src='/photo/visa.png' alt='' style={{width: "100px", height: "100px"}} />
    <img src='/photo/mastercard.png' alt='' style={{width: "70px", height: "50px",marginLeft:"20px"}} />
    <img src='/photo/esewa.png' alt='' style={{width: "60px", height: "50px" ,marginLeft:"20px"}} />
    <img src='/photo/imepay.png' alt='' style={{width: "130px", height: "50px"}} />
    </p>
  </div>
  <div className="p-2" style={{marginLeft:"200px"}}>Verified by
    <p>
    <img src='/photo/pcj.png' alt='' style={{width: "150px", height: "70px", marginTop:"20px"}} />
    </p>
  </div>
  <div className="p-2" style={{marginTop:"50px", marginLeft:"150px"}}>
  <SellerAccount/>
  </div>
</div>
   </>
  )
}
