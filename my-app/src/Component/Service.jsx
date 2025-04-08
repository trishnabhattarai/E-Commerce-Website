import React, { useEffect, useRef, useState } from 'react';
import './Service.css'; // Import the CSS file
import User from './User';
import Payment from './Payment';
export default function Service() {
  const textRef = useRef(null);
  const [visibleImages, setVisibleImages] = useState([false, false, false, false, false]);

  useEffect(() => {
    const text = '***Our Services***';
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        textRef.current.innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeEffect, 100);
      }
    }

    textRef.current.innerHTML = '';
    typeEffect();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleImages([true, true, true, true, true]);
    }, 400); // Start showing images after the typing effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <p ref={textRef} className="text-center text-secondary fw-bold fs-2 typing" style={{marginTop: "50px"}}></p>
      <div className="d-flex flex-wrap justify-content-center" style={{marginTop: "50px"}}>
        <div className={`p-2 shadow-lg mx-5 text-center image-container ${visibleImages[0] ? 'visible' : ''}`} >
          <img src='/photo/31.gif' alt='' style={{width: "300px", height: "300px"}} />
          <p className='text-dark fs-5'>*Discount on each product*</p>
        </div>
        <div className={`p-2 shadow-lg mx-5 text-center image-container ${visibleImages[1] ? 'visible' : ''}`} >
          <img src='/photo/30.gif' alt='' style={{width: "300px", height: "300px"}} />
          <p className='text-dark fs-5'>*Fast Product Delivery*</p>
        </div>
        <div className={`p-2 shadow-lg mx-5 text-center image-container ${visibleImages[2] ? 'visible' : ''}`} >
          <img src='/photo/32.gif' alt='' style={{width: "300px", height: "300px"}} />
          <p className='text-dark fs-5'>*Digital Payment Ways*</p>
        </div>
        <div className={`p-2 shadow-lg mx-5 text-center image-container ${visibleImages[3] ? 'visible' : ''}`} style={{marginTop:"50px"}}>
          <img src='/photo/33.gif' alt='' style={{width: "300px", height: "300px"}} />
          <p className='text-dark fs-5'>*Give Away*</p>
        </div>
        <div className={`p-2 shadow-lg mx-5 text-center image-container ${visibleImages[4] ? 'visible' : ''}`} style={{marginTop:"50px"}}>
          <img src='/photo/34.gif' alt='' style={{width: "300px", height: "300px"}} />
          <p className='text-dark fs-5'>*Product Quality*</p>
        </div>
      </div>
      <User/>

<Payment></Payment>

    </>
  );
}
