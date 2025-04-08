import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';
import RatingComponent from './RatingComponent'; // Import the RatingComponent


export default function ProductDetail() {
  const { productId } = useParams(); // This captures the productId from the route

  // Product list with available sizes and quantities
  const products = [
    {
      id: 1, name: "Women's Casual wear", price: 400, brand: 'FuLoo', sizes: ['M', 'L', 'XL'], availableQuantity: 5, soldQuantity: 2, rate: 4, color: 'Red', warrantyType: 'No Warranty', fabric: 'Cotton', image: '/photo/16.png', reviews: [
        { rating: 5, text: 'Great product!' },
        { rating: 4, text: 'Good quality' },
        { rating: 3, text: 'Average product, could be better' }
      ]
    },
    {
      id: 2, name: "Women's Party wear Lehnga", price: 1000, brand: 'Aamayra Fashion House', sizes: ['M', 'L'], availableQuantity: 3, soldQuantity: 1, rate: 5, color: 'Pink', warrantyType: '1 Year', fabric: 'Silk', image: '/photo/17.png', reviews: [
        { rating: 5, text: 'Great product!' },
        { rating: 4, text: 'Good quality' },
        { rating: 3, text: 'Average product, could be better' }
      ]
    },
    {
      id: 3, name: "Women's Casual wear", price: 500, brand: 'Creative Touch', sizes: ['S', 'M'], availableQuantity: 6, soldQuantity: 3, rate: 3, color: 'Blue', warrantyType: '6 Months', fabric: 'Linen', image: '/photo/18.png', reviews: [
        { rating: 5, text: 'Great product!' },
        { rating: 4, text: 'Good quality' },
        { rating: 3, text: 'Average product, could be better' }
      ]
    },
    {
      id: 4, name: "Women's Casual wear", price: 600, brand: 'Attire Nepal', sizes: ['S', 'M'], availableQuantity: 6, soldQuantity: 3, rate: 4, color: 'Green', warrantyType: 'No Warranty', fabric: 'Polyester', image: '/photo/19.png', reviews: [
        { rating: 5, text: 'Great product!' },
        { rating: 4, text: 'Good quality' },
        { rating: 3, text: 'Average product, could be better' }
      ]
    },
    {
      id: 5, name: "Women's Party wear", price: 1000, brand: 'FuLoo', sizes: ['S', 'M'], availableQuantity: 6, soldQuantity: 3, rate: 5, color: 'Yellow', warrantyType: '2 Years', fabric: 'Georgette', image: '/photo/20.png', reviews: [
        { rating: 5, text: 'Great product!' },
        { rating: 4, text: 'Good quality' },
        { rating: 3, text: 'Average product, could be better' }
      ]
    },
    {
      id: 6, name: "Women's Party wear Gown", price: 1500, brand: 'Aamayra Fashion House', sizes: ['S', 'M'], availableQuantity: 6, soldQuantity: 3,
      rate: 4, color: 'Black', warrantyType: 'No Warranty', fabric: 'Satin', image: '/photo/21.png', reviews: [
        { rating: 5, text: 'Great product!' },
        { rating: 4, text: 'Good quality' },
        { rating: 3, text: 'Average product, could be better' }
      ]
    },
  ];

  // Find the product by its ID
  const product = products.find((p) => p.id === parseInt(productId));

  // Manage selected size and quantity
  const [selectedSize, setSelectedSize] = useState(product ? product.sizes[0] : ''); // Default size selection
  const [quantity, setQuantity] = useState(1); // Default quantity

  // Example data for brand and user
  const brand = {
    logo: '/path/to/brand-logo.png',
    name: product ? product.brand : 'Brand Name',
    joinDate: '2023-01-01'
  };

  const user = {
    logo: '/path/to/user-logo.png'
  };

  const [reviews, setReviews] = useState([
    { userLogo: user.logo, text: 'Product review given by other buyers.' }
  ]);

  const [newReview, setNewReview] = useState(''); // Manage new review input

  // Add the new review to the list of reviews
  const handleAddReview = () => {
    if (newReview.trim() !== '') {
      setReviews([...reviews, { userLogo: user.logo, text: newReview }]);
      setNewReview(''); // Clear the input field after adding the review
    }
  };

  // If product not found, display error message
  if (!product) {
    return <div>Product not found!</div>;
  }

  // Calculate the overall rating for the product
  const overallRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;


  // Function to handle quantity increment/decrement
  const handleQuantityChange = (action) => {
    if (action === 'increment' && quantity < product.availableQuantity) {
      setQuantity(quantity + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container mt-5" style={{ height: "1150px", width: "2000px" }}>
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} alt={product.name} className="img-fluid" style={{ maxWidth: '100%', marginTop: "50px", marginLeft: "30px" }} />
        </div>
        <div className="col-md-6" style={{ marginTop: "50px" }}>
          <h3>{product.name}</h3>
          <p><strong>Price:</strong> Rs. {product.price}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Rating:</strong> <StarRating rating={product.rate} /> </p>
          <p><strong>Color:</strong> {product.color}</p>
          <p><strong>Warranty:</strong> {product.warrantyType}</p>
          <p><strong>Fabric:</strong> {product.fabric}</p>



          {/* Size selection */}
          <div className="mb-3">
            <strong>Size: </strong>
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`btn ${selectedSize === size ? 'btn-secondary' : 'btn-outline-secondary'} mx-1`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity selection */}
          <div className="mb-3">
            <strong>Quantity: </strong>
            <button onClick={() => handleQuantityChange('decrement')} className="btn btn-outline-secondary">-</button>
            <span className="mx-2">{quantity}</span>
            <button onClick={() => handleQuantityChange('increment')} className="btn btn-outline-secondary">+</button>
            <p className="text-muted">Only {product.availableQuantity} items left</p>
          </div>

          {/* Action buttons */}
          <div>
            <button className="btn btn-primary me-2">Buy Now</button>
            <button className="btn btn-secondary" style={{ marginLeft: "30px" }}>Add to Cart</button>
          </div>


        </div>
        <div className="d-inline-flex align-items-start">
          <div className="p-2" style={{ marginTop: "50px", marginLeft: "20px" }}>
            <div className="col-md-6">
              <div className="review-section" style={{
                width: "500px",
                height: "500px",

                borderRadius: "20px",
                border: "3px solid white",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}>
                {/* Brand Information */}
                <div className="brand-info" style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px"
                }}>
                  <img src={brand.logo} alt="Brand" style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "15px"
                  }} />
                  <div>
                    <p style={{ margin: "0" }}><strong>{brand.name}</strong></p>
                    <p style={{ margin: "0" }}>Join date of brand: {brand.joinDate}</p>
                  </div>
                </div>


                {/* Reviews Section */}
                <div className="reviews" style={{
                  marginBottom: "20px"
                }}>
                  {reviews.map((review, index) => (
                    <div key={index} className="review" style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px"
                    }}>
                      <img src={review.userLogo} alt="User" style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        marginRight: "10px"
                      }} />
                      <p>{review.text}</p>
                    </div>
                  ))}
                </div>

                {/* Add Review Section */}
                <div className="add-review" style={{ display: "flex" }}>
                  <input
                    type="text"
                    placeholder="Review product"
                    value={newReview} // Bind the input value to newReview state
                    onChange={(e) => setNewReview(e.target.value)} // Update newReview state on input change
                    style={{
                      flex: 1,
                      padding: "10px",
                      marginRight: "10px",
                      fontSize: "16px",
                      borderRadius: "10px",
                      border: "1px solid #ccc"
                    }}
                  />
                  <button
                    onClick={handleAddReview} // Call handleAddReview on button click
                    style={{
                      padding: "10px 15px",
                      fontSize: "16px",
                      borderRadius: "10px",
                      backgroundColor: "#888",
                      color: "#fff",
                      border: "none"
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>


            {/* Rating Component */}
            <div className="rating-box-right">
              <RatingComponent
                overallRating={overallRating}
                totalReviews={product.reviews.length}
                reviews={product.reviews}
              />
            </div>


          </div>
          <div className="p-2" style={{ border: "2px solid white", height: "500px", width: "500px", marginTop: "60px", borderRadius: "10px", marginLeft: "20px", overflowX: "auto" }}>
            <p> Product Detail:
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias commodi iste sed, quisquam, quae ducimus fuga ratione ipsam aspernatur esse quia ipsa? Necessitatibus autem alias doloribus voluptas et quidem reiciendis accusamus harum at temporibus!
            </p>
            <style>

            </style>
          </div>

        </div>


      </div>
    </div>
  );
}