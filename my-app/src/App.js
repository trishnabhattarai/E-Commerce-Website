import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import Image from './Component/Image';
import Login from './Component/Login';
import SellerAccount from './Component/SellerAccount';
import Navbar from './Component/Navbar';


import Createaccount from './Component/Createaccount';
import Women from './Component/Women';

import Service from './Component/Service';

import User from './Component/User';
import Contact from './Component/Contact';
import Errorpage from './Component/Errorpage';
import ProductDetail from './Component/ProductDetail';
import ImForm from './Component/ImForm'; // Import the component
import UploadProduct from './Component/UploadProduct';
import CategoryPage from './Component/CategoryPage';
import Healthbeauty from './Component/Healthbeauty';
import Mensfashion from './Component/Mensfashion';
import BabiesToy from './Component/BabiesToy';
import ElectronicDevices from './Component/ElectronicDevices';
import TVHome from './Component/TVHome';
import WatchesAcc from './Component/WatchesAcc';
function App() {
  return (
    <>
   
    <div className='back'>
    <Router>
    <header className="Background">
    <Navbar />
    </header>
    <Routes>
      <Route path="/" element={<Image />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SellerAccount" element={<SellerAccount/>} />
      <Route path="/" element={<Createaccount/>} />
      <Route path="/Women" element={<Women/>} />
      <Route path="/product/:productId" element={<ProductDetail/>} />
      
      <Route path="/" element={<Service/>} />
      <Route path="/" element={<User/>} />
      <Route path="*" element={<Errorpage/>} />
      <Route path="/imform" element={<ImForm />} />
      <Route path="/UploadProduct" element={<UploadProduct/>} />
      <Route path='/CategoryPage' element={<CategoryPage/>}/>
      <Route path='/Healthbeauty' element={<Healthbeauty/>}/>
      <Route path='/Mensfashion' element={<Mensfashion/>}/>
      <Route path='/BabiesToy' element={<BabiesToy/>}/>
      <Route path='/ElectronicDevices' element={<ElectronicDevices/>}/>
      <Route path='/TVHome' element={<TVHome/>}/>
      <Route path='/WatchesAcc' element={<WatchesAcc/>}/>
    </Routes>
    <Contact/>
  </Router>    
  
  </div>
  </>
  );
}

export default App;
