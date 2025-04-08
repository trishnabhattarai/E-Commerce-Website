import React, { useState } from 'react';
import './CategoryPage.css';
// Reusable Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h4>{product.name}</h4>
      <p>Rs. {product.price}</p>
      <button className="add-to-cart">Add to Cart</button>
      <a href="#" className="view-details">View Details</a>
    </div>
  );
};

// Reusable Filter Component
const Filter = ({ filters }) => {
  return (
    <div className="filter-section">
      <h5>Filters</h5>
      {filters.map((filter, index) => (
        <div key={index}>
          <input type="checkbox" id={filter} /> <label htmlFor={filter}>{filter}</label><br />
        </div>
      ))}
    </div>
  );
};

// Main Category Page Component
const CategoryPage = ({ category, products, filters }) => {
  return (
    <div className="category-page">
      {/* Filter Section */}
      <div className="filter-container">
        <Filter filters={filters} />
      </div>

      {/* Product Display Section */}
      <div className="product-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Example Usage for Different Categories

const productsForWomen = [
  { id: 1, name: 'Women\'s Casual Wear', price: 400, imageUrl: 'image-url-1' },
  { id: 2, name: 'Women\'s Party Wear Lehnga', price: 1000, imageUrl: 'image-url-2' },
];

const productsForMen = [
  { id: 3, name: 'Men\'s Casual Wear', price: 600, imageUrl: 'image-url-3' },
  { id: 4, name: 'Men\'s Formal Wear', price: 1500, imageUrl: 'image-url-4' },
];

const filtersForWomen = ['Brand 1', 'Brand 2', 'Price Range'];
const filtersForMen = ['Size S', 'Size M', 'Size L'];

export default function App() {
  const [category, setCategory] = useState('Women');

  const products = category === 'Women' ? productsForWomen : productsForMen;
  const filters = category === 'Women' ? filtersForWomen : filtersForMen;

  return (
    <div>
      <button onClick={() => setCategory('Women')}>Women</button>
      <button onClick={() => setCategory('Men')}>Men</button>

      <CategoryPage category={category} products={products} filters={filters} />
    </div>
  );
}
