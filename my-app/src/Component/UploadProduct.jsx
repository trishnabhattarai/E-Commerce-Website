import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

export default function UploadProduct() {
  const [images, setImages] = useState([]);
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [shopAddress, setShopAddress] = useState('');
  const [experience, setExperience] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [warranty, setWarranty] = useState('');
  const [fabric, setFabric] = useState('');
  const [sizes, setSizes] = useState('');
  const [quantity, setQuantity] = useState('');
  const [weight, setWeight] = useState('');
  const [services, setServices] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length <= 6) {
      setImages([...images, ...files]);
    } else {
      alert('You can upload a maximum of 6 images.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      images,
      productName,
      productCategory,
      videoURL,
      shortDescription,
      shopAddress,
      experience,
      longDescription,
      price,
      brand,
      color,
      warranty,
      fabric,
      sizes,
      quantity,
      weight,
      services,
    };

    console.log(productData); // For debugging

    // Conditional routing based on product category
    switch (productCategory) {
      case "Women":
        navigate('/Women', { state: { productData } });
        break;
      case "Health":
        navigate('/Healthbeauty', { state: { productData } });
        break;
      case "Men":
        navigate('/Mensfashion', { state: { productData } });
        break;
        case "Electronic":
        navigate('/ElectronicDevices', { state: { productData } });
        break;
        case "TV":
        navigate('/TVHome', { state: { productData } });
        break;
        case "Babies":
        navigate('/BabiesToy', { state: { productData } });
        break;
        case "Watches":
        navigate('/WatchesAcc', { state: { productData } });
        break;
      // Add more cases for other categories
      default:
        alert("Please select a valid category");
        break;
    }
  };
  return (
    <div className="container mt-4" style={{backgroundColor:"#C1B6A4"}}>
         <div className="d-flex align-items-stretch">
         <div className="p-2" >
        <img src='./photo/uploadproduct.png' alt='' style={{marginLeft:"100px", marginTop:"10px"}}
            />
         </div>
         <div className="p-2" >
         <img src='./photo/Business Plan.gif' alt='' style={{ height:"300px"}}/>
         </div>
         </div>
     
     
      <form onSubmit={handleSubmit}>

      <div className="d-flex align-items-stretch">
      <div className="p-2" style={{width:"400px"}}>

{/* Image Upload */}
<div className="mb-3">
          <label style={{marginTop:"40px"}}>Upload Images (Max 6)</label>
          <input
            type="file"
            className="form-control"
            multiple
            accept="image/*"
            style={{ background: 'transparent' }}
            onChange={handleImageUpload}
          />
          {/* Display image previews and names */}
          {images.length > 0 && (
            <div className="image-preview-container">
              {images.map((image, index) => (
                <div key={index} className="image-preview-item">
                  <p>{image.name}</p>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Product ${index}`}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
  <div className="p-2" style={{width:"400px"}}>
     {/* Product Details */}
     <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            value={productName}
            placeholder="Product Name"
            style={{marginTop:"60px", background:"transparent"}}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label>Product Category</label>
          <select
            className="form-select"
            value={productCategory}
            style={{ background: 'transparent' }}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Women">Women's Fashion</option>
            <option value="Health">Health & Beauty</option>
            <option value="Men">Men's Fashion</option>
            <option value="Electronic">Electronic Devices</option>
            <option value="TV">TV & Home Appliances</option>
            <option value="Babies">Babies & Toys</option>
            <option value="Watches">Watches & Accessories</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            value={shopAddress}
            placeholder="Shop Address"
            style={{ background: 'transparent' }}
            onChange={(e) => setShopAddress(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            value={experience}
            placeholder="Experience in the market"
            style={{ background: 'transparent' }}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            className="form-control"
            value={price}
            placeholder="Product Price"
            style={{ background: 'transparent' }}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            value={brand}
            placeholder="Product Brand"
            style={{ background: 'transparent' }}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            value={color}
            placeholder="Product Color"
            style={{ background: 'transparent' }}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            value={warranty}
            placeholder="Product Warranty"
            style={{ background: 'transparent' }}
            onChange={(e) => setWarranty(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            value={fabric}
            placeholder="Fabric/Material"
            style={{ background: 'transparent' }}
            onChange={(e) => setFabric(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            value={sizes}
            placeholder="Available Sizes"
            style={{ background: 'transparent' }}
            onChange={(e) => setSizes(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="number"
            className="form-control"
            value={quantity}
            placeholder="Product Quantity"
            style={{ background: 'transparent' }}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="number"
            className="form-control"
            value={weight}
            placeholder="Product Weight (in kg)"
            style={{ background: 'transparent' }}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
  </div>
  <div className="p-2"style={{width:"400px"}}>

  <div className="form-group mb-3">
          <input
            type="url"
            className="form-control"
            value={videoURL}
            placeholder="Video URL"
            style={{marginTop:"60px", background:"transparent", height:"100px"}}
            
            onChange={(e) => setVideoURL(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <textarea
            className="form-control"
            value={shortDescription}
            placeholder="Short Description (Include Shop Address and Experience)"
            rows="2"
            style={{ background: 'transparent', height:"100px" }}
            onChange={(e) => setShortDescription(e.target.value)}
          ></textarea>
        </div>

        

        

        <div className="form-group mb-3">
          <textarea
            className="form-control"
            value={longDescription}
            placeholder="Product Long Description"
            rows="4"
            style={{ background: 'transparent' }}
            onChange={(e) => setLongDescription(e.target.value)}
          ></textarea>
        </div>

        

        <div className="form-group mb-3">
          <textarea
            className="form-control"
            value={services}
            placeholder="Services Provided by the Shopkeeper"
            rows="2"
            style={{ background: 'transparent', height:"200px" }}
            onChange={(e) => setServices(e.target.value)}
          ></textarea>
        </div>

  </div>
      </div>




        

       

       

        

        <button type="submit" className="btn btn-secondary" style={{marginLeft:"500px"}}>
          Submit Product
        </button>
      </form>

      {/* CSS */}
      <style jsx>{`
        .image-preview-container {
          display: flex;
          flex-wrap: wrap;
          gap: 30px; /* Spacing between images */
        }
        .image-preview-item {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
