import React, { useState, useContext } from 'react';



import { AppContext } from '../Context/Productcontext';
import { Link } from 'react-router-dom';

export default function Women() {

  const myName = useContext(AppContext);

  // State to manage clicked product
  const [clickedProductId, setClickedProductId] = useState(null);

  // Sample product list (this can be fetched from an API or a context)
  const products = [
    { id: 1, name: "Women's Casual wear", price: 400, brand: 'FuLoo', size: 'M', rate: 4, color: 'Red', warrantyType: 'No Warranty', fabric: 'Cotton', image: '/photo/16.png' },
    { id: 2, name: "Women's Party wear Lehnga", price: 1000, brand: 'Aamayra Fashion House', size: 'L', rate: 5, color: 'Pink', warrantyType: '1 Year', fabric: 'Silk', image: '/photo/17.png' },
    { id: 3, name: "Women's Casual wear", price: 500, brand: 'Creative Touch', size: 'S', rate: 3, color: 'Blue', warrantyType: '6 Months', fabric: 'Linen', image: '/photo/18.png' },
    { id: 4, name: "Women's Casual wear", price: 600, brand: 'Attire Nepal', size: 'XL', rate: 4, color: 'Green', warrantyType: 'No Warranty', fabric: 'Polyester', image: '/photo/19.png' },
    { id: 5, name: "Women's Party wear", price: 1000, brand: 'FuLoo', size: 'M', rate: 5, color: 'Yellow', warrantyType: '2 Years', fabric: 'Georgette', image: '/photo/20.png' },
    { id: 6, name: "Women's Party wear Gown", price: 1500, brand: 'Aamayra Fashion House', size: 'L', rate: 4, color: 'Black', warrantyType: 'No Warranty', fabric: 'Satin', image: '/photo/21.png' },
  ];

  // Handle product click
  const handleProductClick = (productId) => {
    setClickedProductId(productId);
  };
 

  // Define button styles
  const buttonStyles = {
    '--bs-btn-padding-y': '.25rem',
    '--bs-btn-padding-x': '.5rem',
    '--bs-btn-font-size': '.75rem'
  };

  // Set fixed width and height for product items
  const productItemStyle = {
    width: '170px', // Fixed width for product item
    height: '400px', // Adjust height based on content
    margin: '10px',
    padding: '10px',
    transition: 'background-color 0.3s ease, opacity 0.3s ease', // For hover and click transitions
  };

  return (
    <>
      {myName}
      <div className="d-flex align-items-stretch">
        {/* Sidebar */}
        <div className="p-2" style={{ width: "250px" }}>
          <div className="d-flex flex-column mb-3">
            <div className="p-2 fw-bold text-secondary">Promotion & Services</div>
            <ul className='text-light'>
              <li style={{ marginTop: "10px" }}>Free Home Delivery.</li>
              <li>Authentic Brand.</li>
              <li>Bliss Verified.</li>
              <li>Cash on Delivery.</li>
            </ul>
          </div>
        </div>

        {/* Product Listing */}
        <div className="d-flex flex-wrap justify-content-start p-2">
          {products.map((product) => (
            <div
              key={product.id}
              className={`border rounded p-2 text-center ${clickedProductId === product.id ? 'bg-light' : 'bg-transparent'}`}
              style={{
                ...productItemStyle,
                opacity: clickedProductId === product.id ? 1 : 0.9,
              }}
              onClick={() => handleProductClick(product.id)}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = clickedProductId === product.id ? '1' : '0.9')}
            >
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
                style={{ width: '150px', height: '200px', objectFit: 'cover' }}
              />
              <div className="fw-medium" style={{ marginTop: "12px" }}>{product.name}</div>
              <div className="fw-bold">Rs. {product.price}</div>
              <button className="btn btn-secondary" style={{ buttonStyles, marginTop: "10px" }}  >
                Add to Cart
              </button>
              <button className="btn text-secondary mt-2" style={buttonStyles}>
                <Link to={`/product/${product.id}`} className="text-decoration-none">
                  View Details
                </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
