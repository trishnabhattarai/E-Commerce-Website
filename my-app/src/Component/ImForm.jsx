import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting

export default function ImForm() {
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Address form state
  const [address, setAddress] = useState('');
  const [zone, setZone] = useState('');
  const [region, setRegion] = useState('');
  const [area, setArea] = useState('');
  const [isSameAsBusinessAddress, setIsSameAsBusinessAddress] = useState(false);

  // Corporate verification form state
  const [businessOwnerName, setBusinessOwnerName] = useState('');
  const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState('');
  const [businessDoc, setBusinessDoc] = useState(null);

  // Bank information form state
  const [accountTitle, setAccountTitle] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [chequeCopy, setChequeCopy] = useState(null);

  // Submission state for each form
  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
  const [isCorporateSubmitted, setIsCorporateSubmitted] = useState(false);
  const [isBankSubmitted, setIsBankSubmitted] = useState(false);

  // Handle file uploads
  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  // Handle Address Form submit
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (!address || !zone || !region || !area) {
      alert('Please fill out all address fields.');
      return;
    }
    setIsAddressSubmitted(true); // Set the address form as submitted
    console.log('Address Form Submitted', { address, zone, region, area });
  };

  // Handle Corporate Form submit
  const handleCorporateSubmit = (e) => {
    e.preventDefault();
    if (!businessOwnerName || !businessRegistrationNumber || !businessDoc) {
      alert('Please fill out all corporate fields and upload a business document.');
      return;
    }
    setIsCorporateSubmitted(true); // Set the corporate form as submitted
    console.log('Corporate Verification Submitted', { businessOwnerName, businessRegistrationNumber, businessDoc });
  };

  // Handle Bank Form submit
  const handleBankSubmit = (e) => {
    e.preventDefault();
    if (!accountTitle || !accountNumber || !bankName || !branchName || !chequeCopy) {
      alert('Please fill out all bank details and upload a cheque copy.');
      return;
    }
    setIsBankSubmitted(true); // Set the bank form as submitted
    console.log('Bank Info Submitted', { accountTitle, accountNumber, bankName, branchName, chequeCopy });
  };

  // useEffect to check if all forms are submitted and initiate a 30-second delay before redirecting
  useEffect(() => {
    if (isAddressSubmitted && isCorporateSubmitted && isBankSubmitted) {
      console.log('All forms submitted. Redirecting in 30 seconds...');
      
      // Set a timeout of 30 seconds before redirecting
      const timer = setTimeout(() => {
        navigate('/uploadproduct'); // Redirect to UploadProduct page after 30 seconds
      }, 1000); // 30 seconds in milliseconds

      // Cleanup the timeout if the component is unmounted or changes
      return () => clearTimeout(timer);
    }
  }, [isAddressSubmitted, isCorporateSubmitted, isBankSubmitted, navigate]);

  return (
    <div className="container">
      <div className="row mt-4" style={{height:"1360px"}}>
        <div className="col-md-4">
          <div id="list-example" className="list-group">
            <a className="list-group-item list-group-item-action" href="#simple-list-item-1" style={{height:"380px", background:"grey", width:"200px", marginTop:"30px", marginLeft:"30px",borderRadius: "40px"}}>
                <p className="text-light" style={{marginTop:"170px", marginLeft:"40px"}}>Address Form</p>
            </a>
            <a className="list-group-item list-group-item-action" href="#simple-list-item-2" style={{height:"300px", background:"grey", width:"200px", marginTop:"80px", borderRadius: "40px", marginLeft:"30px"}}>
                <p className="text-light" style={{marginTop:"100px", marginLeft:"40px"}}>Corporate Verification Form</p>
            </a>
            <a className="list-group-item list-group-item-action" href="#simple-list-item-3" style={{height:"380px", background:"grey", width:"200px", marginLeft:"30px", marginTop:"80px", borderRadius: "40px"}}>
                <p className="text-light" style={{marginTop:"150px", marginLeft:"30px"}}>Bank Information</p>
            </a>
          </div>
        </div>
        <div className="col-md-8">
          <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabIndex="0">
            {/* Address Form */}
            {isAddressSubmitted ? (
              <div className="text-center" style={{ marginTop: '80px' }}>
                <img src="./photo/check.png" alt="Order Placed" style={{width:"200px", height:"200px"}} />
                <h5 style={{marginTop:"70px"}}>Woohoo! Your Address Form has been submitted.</h5>
              </div>
            ) : (
              <form id="simple-list-item-1" onSubmit={handleAddressSubmit}>
                <h4 className='text-center text-secondary' style={{marginTop:"30px"}}>Address Form</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={address}
                    placeholder="Business Address"
                    style={{ background: 'transparent' , marginTop:"20px"}}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={zone}
                    placeholder="Zone"
                    onChange={(e) => setZone(e.target.value)}
                    style={{ background: 'transparent' }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={region}
                    placeholder="Region"
                    onChange={(e) => setRegion(e.target.value)}
                    style={{ background: 'transparent' }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={area}
                    placeholder="Area"
                    onChange={(e) => setArea(e.target.value)}
                    style={{ background: 'transparent' }}
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={isSameAsBusinessAddress}
                    onChange={() => setIsSameAsBusinessAddress(!isSameAsBusinessAddress)}
                    style={{ background: 'transparent' }}
                  />
                  <label className="form-check-label text-grey text-center">WareHouse and Return Address will be same as Business Address.</label>
                </div>
                <button type="submit" className="btn btn-secondary" style={{marginLeft:"280px", marginTop:"30px", width:"200px"}}>Submit Address</button>
              </form>
            )}

            {/* Corporate Verification Form */}
            {isCorporateSubmitted ? (
              <div className="text-center" style={{ marginTop: '80px' }}>
                <img src="./photo/check.png" alt="Order Placed" style={{width:"200px", height:"200px", marginTop:"50px"}} />
                <h5 style={{marginTop:"80px"}}>Woohoo! Your Corporate Form has been submitted.</h5>
              </div>
            ) : (
              <form id="simple-list-item-2" onSubmit={handleCorporateSubmit}>
                <h4 className="text-center text-secondary" style={{marginTop:"80px"}}>Corporate Verification Form</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={businessOwnerName}
                    placeholder="Business Owner Name"
                    onChange={(e) => setBusinessOwnerName(e.target.value)}
                    style={{ background: 'transparent' }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={businessRegistrationNumber}
                    placeholder="Business Registration Number"
                    onChange={(e) => setBusinessRegistrationNumber(e.target.value)}
                    style={{ background: 'transparent' }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => handleFileChange(e, setBusinessDoc)}
                    style={{ background: 'transparent' }}
                  />
                </div>
                <button type="submit" className="btn btn-secondary" style={{marginLeft:"280px", marginTop:"40px", width:"250px"}}>Submit Corporate Verification</button>
              </form>
            )}

            {/* Bank Information Form */}
            {isBankSubmitted ? (
              <div className="text-center" style={{ marginTop: '80px' }}>
                <img src="./photo/check.png" alt="Order Placed" style={{width:"200px", height:"200px"}} />
                <h5 style={{marginTop:"70px"}}>Woohoo! Your Bank Information Form has been submitted.</h5>
              </div>
            ) : (
              <form id="simple-list-item-3" onSubmit={handleBankSubmit}>
                <h4 className="text-center text-secondary" style={{marginTop:"80px"}}>Bank Information Form</h4>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={accountTitle}
                    placeholder="Account Title"
                    onChange={(e) => setAccountTitle(e.target.value)}
                    style={{ background: 'transparent' }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={accountNumber}
                    placeholder="Account Number"
                    onChange={(e) => setAccountNumber(e.target.value)}
                    style={{ background: 'transparent' }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={bankName}
                    placeholder="Bank Name"
                    onChange={(e) => setBankName(e.target.value)}
                    style={{ background: 'transparent' }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={branchName}
                    placeholder="Branch Name"
                    onChange={(e) => setBranchName(e.target.value)}
                    style={{ background: 'transparent' }}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => handleFileChange(e, setChequeCopy)}
                    style={{ background: 'transparent' }}
                  />
                </div>
                <button type="submit" className="btn btn-secondary" style={{marginLeft:"280px", marginTop:"40px", width:"250px"}}>Submit Bank Information</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
