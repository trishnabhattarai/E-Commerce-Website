import React from 'react';
import './User.css'; // Make sure to import the CSS file

export default function User() {
  return (
    <div className="d-flex p-2 flex3 rounded-5 align-items-stretch pink-box" style={{ marginTop: '50px', marginLeft: "80px" ,marginRight: "80px"}}>
      <div className="d-flex align-items-stretch">
        <div className="p-2" style={{ marginLeft: '120px' }}>
          <img src='/photo/41.png' alt="example" style={{ width: '70px', height: '70px' }} />
          <p className="text-white fw-bold fs-2" style={{ marginTop: '30px' }}>Example Text</p>
        </div>
        <div className="p-2" style={{ marginLeft: '120px' }}>
          <img src='/photo/42.png' alt="example" style={{ width: '70px', height: '70px' }} />
          <p className="text-white fw-bold fs-2" style={{ marginTop: '30px' }}>Example Text</p>
        </div>
        <div className="p-2" style={{ marginLeft: '120px' }}>
          <img src='/photo/43.png' alt="example" style={{ width: '70px', height: '70px' }} />
          <p className="text-white fw-bold fs-2" style={{ marginTop: '30px' }}>Example Text</p>
        </div>
      </div>
    </div>
  );
}

