import React from 'react';
  import lottie from "lottie-web";
  import { defineElement } from "@lordicon/element";
  import { Link } from 'react-router-dom';
  import Login from './Login'; 
  
  defineElement(lottie.loadAnimation);
  
  export default function Navbar() {
    return (
      <div>
        <div className="shadow mb-2">
          <div className="w-100">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <p className="text-white">
                    <span className="fst-italic fw-bold mx-2">Bliss</span>
                  </p>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
               
              <ul className='navbar-nav' style={{marginLeft:"400px"}}>
                        <li className="nav-item dropdown">
                       
                        <Link className="nav-link dropdown-toggle text-light" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Category
                      </Link>
                      <ul className="dropdown-menu " style={{background:"transparent",backdropFilter: 'blur(15px)'}}>
                        <div className="d-flex flex-column mb-3">
                          <li><Link className="dropdown-item p-2 text-secondary" to="/Women">Women's Fashion</Link></li>
                          
                          <li><Link className="dropdown-item p-2 text-secondary" to="/">Health & Beauty</Link></li>
                          <li><Link className="dropdown-item p-2 text-secondary" to="/Mensfashion">Men's Fashion</Link></li>
                          <li><Link className="dropdown-item p-2 text-secondary" to="/">Electronic Devices</Link></li>
                          <li><Link className="dropdown-item p-2 text-secondary" to="/">TV & Home Appliances</Link></li>
                          <li><Link className="dropdown-item p-2 text-secondary" to="/">Babies & Toys</Link></li>
                          <li><Link className="dropdown-item p-2 text-secondary" to="/">Watches & Accessories</Link></li>
                        </div>
                      </ul>
                    </li>
              </ul>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 
                    <li className="nav-item mx-5">
                      <Link className="nav-link" to="/">
                        <lord-icon
                          src="https://cdn.lordicon.com/mfmkufkr.json"
                          trigger="hover"
                          colors="primary:#ffffff"
                          style={{ width: "30px", height: "30px" }}
                        ></lord-icon>
                      </Link>
                    </li>
                    
                    <li className="nav-item mx-4">
                      <Link className="nav-link" data-bs-toggle="offcanvas" to="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <lord-icon
                          src="https://cdn.lordicon.com/kthelypq.json"
                          trigger="hover"
                          colors="primary:#ffffff"
                          style={{ width: "30px", height: "30px" }}
                        ></lord-icon>
                      </Link>
                    </li>
                    <li className="nav-item mx-3">
                      <Link className="nav-link" to="/">
                        <lord-icon
                          src="https://cdn.lordicon.com/axteoudt.json"
                          trigger="hover"
                          colors="primary:#ffffff"
                          style={{ width: "30px", height: "30px" }}
                        ></lord-icon>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <Login />
      </div>
    );
  }
  