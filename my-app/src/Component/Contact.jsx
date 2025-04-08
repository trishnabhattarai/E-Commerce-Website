import React from 'react'
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { Link } from 'react-router-dom';

defineElement(lottie.loadAnimation);
export default function Contact() {
  return (
   <>
   
   <div className="d-flex align-items-start flex2 rounded-5 shadow-lg p-3 mb-5" style={{height:"800px",width:"1270px", marginLeft:"50px", marginTop:"100px"}} >
   <div className="p-2">
    <img src='/photo/35.jpg' className='rounded-5' alt='' style={{height:"776px"}} />

   </div>
   <div className="p-2 mx-5">
    <p className='text-white fw-bold fs-2' style={{marginLeft:"200px", marginTop:"50px"}}>
      **Contact US**
    </p>
    <div className="d-flex align-items-stretch">
  <div className="p-2"style={{width:"50px"}}>
    <lord-icon
    src="https://cdn.lordicon.com/ppyvfomi.json"
    trigger="hover"
    colors="primary:#ffffff"
    style={{width:"40px",height:"40px"}}>
</lord-icon>
<p style={{marginTop:"50px"}}>
<lord-icon
    src="https://cdn.lordicon.com/rsvfayfn.json"
    trigger="hover"
    colors="primary:#ffffff"
    style={{width:"40px",height:"40px"}}>
</lord-icon>
</p>
<p style={{marginTop:"50px"}}>
<lord-icon
    src="https://cdn.lordicon.com/nzixoeyk.json"
    trigger="hover"
    colors="primary:#ffffff"
    style={{width:"40px",height:"40px"}}>
</lord-icon>
</p>
<p>
<img src='/photo/45.png' className="mx-4" alt='' style={{width:"40px", height:"40px",marginTop:"50px"}}/>
</p>
</div>
<div className='p-2'>
<div className="d-flex flex-column mb-3">
  <div className="p-2 text-white" style={{marginLeft:"50px"}}>* Here you can write your store information and location which makes customer easier to visit.</div>
  <div className="p-2 text-white" style={{marginLeft:"50px",marginTop:"20px"}}>
  
  * Here you can include your store phone number i.e. <Link className="link-light link-offset-2 link-underline link-underline-opacity-0" to="tel:98XXXXXXXXX">98XXXXXXXXX.
    </Link>
  </div>
  <div className="p-2 text-white" style={{marginLeft:"50px",marginTop:"30px"}}>* Here you can include your store Gmail i.e xyzabc@gmail.com</div>
  <div className='p-2' style={{marginLeft:"50px",marginTop:"30px"}}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.7450175010848!2d87.66962194354312!3d26.673430140342404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58f0c5731570d%3A0x9d0b4453f8dfcf40!2sMahendra%20Purifier%20-%20Damak!5e1!3m2!1sen!2snp!4v1719320895356!5m2!1sen!2snp"
 width="450" height="100" style={{border:"0", allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
</div>
</div>
</div>

</div>
<p className='text-white' style={{marginTop:"30px"}}>____________________________________________________________________________________</p>
<div className="d-inline-flex p-2" style={{marginLeft:"80px"}}>
  <Link to="https://www.facebook.com/">
  <img src='/photo/36.png' className="mx-4" alt='' style={{marginLeft:"50px", width:"30px",height:"30px"}}/>
  </Link>
  <Link to="https://www.instagram.com/">
  <img src='/photo/37.png' className="mx-4" alt='' style={{marginLeft:"50px", width:"30px",height:"30px"}}/>
  </Link>
  <Link to="https://web.skype.com/">
  <img src='/photo/38.png' className="mx-4" alt='' style={{marginLeft:"50px", width:"30px",height:"30px"}}/>
  </Link>
  <Link to="https://x.com/?lang-en=">
  <img src='/photo/39.png' className="mx-4" alt='' style={{marginLeft:"50px", width:"30px",height:"30px"}}/>
  </Link>
  <Link to="https://www.youtube.com/">
  <img src='/photo/40.png' className="mx-4" alt='' style={{marginLeft:"50px", width:"30px",height:"30px"}}/>
  </Link>
</div>
<div className="d-inline-flex p-2" style={{marginTop:"50px",marginLeft:"500px"}}>
<img src='/photo/44.png'  alt=''/>
</div>
</div>

</div> 

   </>
  )
}
