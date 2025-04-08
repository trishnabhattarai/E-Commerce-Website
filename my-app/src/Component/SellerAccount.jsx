import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function SellerAuthModal() {
  const [shopName, setShopName] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [whatsappCode, setWhatsappCode] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [storeName, setStoreName] = useState('');
  const [isFirstTime] = useState(true);

  const navigate = useNavigate(); // For page navigation

  // Handle login function with validation
  const handleLogin = () => {
    if (shopName.trim() && password.trim()) {
      // Check if first-time login
      if (isFirstTime) {
        navigate('/imform'); // Redirect to ImForm.jsx
      } else {
        navigate('/productinfofill'); // Redirect to ProductInfoFill.jsx
      }
    } else {
      alert('Please enter both Shop Name and Password!');
    }
  };

  // Handle registration with validation
  const handleRegister = () => {
    if (phoneNumber && newPassword && whatsappCode && email && storeName && confirmPassword) {
      if (newPassword === confirmPassword) {
        setShopName(storeName);
        setPassword(newPassword);

        // Hide registration modal, show login modal
        const registerModal = window.bootstrap.Modal.getInstance(document.getElementById('registerModal'));
        if (registerModal) registerModal.hide();
        const loginModal = new window.bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
      } else {
        alert('Passwords do not match!');
      }
    } else {
      alert('Please fill in all the fields!');
    }
  };

  return (
    <div>
      {/* First Modal: Login */}
      <div className="modal fade" id="loginModal" aria-hidden="true" aria-labelledby="loginModalLabel" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: "#C1B6A4" }}>
            <div className="modal-header">
              <h5 className="modal-title text-light" id="loginModalLabel">Login as a Seller</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{marginLeft:"550px"}}></button>
            </div>
            <div className="modal-body d-flex">
              <img src='./photo/Ice cream seller.gif' alt='' style={{ width: "350px" }} className="me-3" />
              <div className="flex-grow-1">
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    value={shopName} 
                    placeholder="Shop Name"
                    onChange={(e) => setShopName(e.target.value)}
                    style={{ background: "transparent" , marginTop:"50px"}} 
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="password" 
                    className="form-control" 
                    value={password} 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{ background: "transparent" }} 
                  />
                </div>
                <Link to="/" className="d-block mb-3" style={{marginLeft:"130px"}}>Forgot password?</Link>
                <button className="btn btn-secondary" onClick={handleLogin} style={{ marginLeft:"110px",width: "150px" }}>Login</button>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-target="#registerModal" data-bs-toggle="modal">Register</button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Modal: Registration */}
      <div className="modal fade" id="registerModal" aria-hidden="true" aria-labelledby="registerModalLabel" tabIndex="-1">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content" style={{ backgroundColor: "#C1B6A4" }}>
            <div className="modal-header">
              <h5 className="modal-title text-light" id="registerModalLabel">Register as a Seller</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{marginLeft:"550px"}}></button>
            </div>
            <div className="modal-body d-flex">
              <img src='./photo/Ecommerce.gif' alt='' style={{ width: "350px" }} className="me-3" />
              <div className="flex-grow-1">
                <div className="mb-3">
                  <input 
                    type="tel" 
                    className="form-control" 
                    value={phoneNumber} 
                    placeholder="Phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    style={{ background: "transparent" }} 
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    value={whatsappCode} 
                    placeholder="WhatsApp Verification Code"
                    onChange={(e) => setWhatsappCode(e.target.value)} 
                    style={{ background: "transparent" }} 
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    value={email} 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} 
                    style={{ background: "transparent" }} 
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    value={storeName} 
                    placeholder="Store Name"
                    onChange={(e) => setStoreName(e.target.value)} 
                    style={{ background: "transparent" }} 
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="password" 
                    className="form-control" 
                    value={newPassword} 
                    placeholder="New Password"
                    onChange={(e) => setNewPassword(e.target.value)} 
                    style={{ background: "transparent" }} 
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="password" 
                    className="form-control" 
                    value={confirmPassword} 
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                    style={{ background: "transparent" }} 
                  />
                </div>
                <button className="btn btn-secondary" onClick={handleRegister} style={{ width: "100px",marginLeft:"150px" }}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button to trigger the first modal */}
      <button className="btn btn-transparent" data-bs-target="#loginModal" data-bs-toggle="modal">Become a Seller</button>
    </div>
  );
}
