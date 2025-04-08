import React, { useState } from 'react';

const ReviewBox = ({ brand, user, reviews, onAddReview }) => {
    const [reviewText, setReviewText] = useState('');

    const handleReviewSubmit = () => {
        if (reviewText.trim()) {
            onAddReview(reviewText);
            setReviewText(''); // Clear the input field
        }
    };

    return (
        <div className="review-box" style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '10px', width: '100%' }}>
            {/* Brand logo and info */}
            <div className="brand-info" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ flexShrink: 0, marginRight: '10px' }}>
                    <img 
                        src={brand.logo} 
                        alt="Brand Logo" 
                        style={{ borderRadius: '50%', width: '50px', height: '50px', border: '2px solid yellow' }} 
                    />
                </div>
                <div style={{ border: '2px solid orange', padding: '5px' }}>
                    <h4>{brand.name}</h4>
                    <p style={{ margin: 0 }}>Join date of brand: {brand.joinDate}</p>
                </div>
            </div>

            {/* Product reviews */}
            <div className="reviews">
                {reviews.length > 0 ? reviews.map((review, index) => (
                    <div key={index} className="review" style={{ background: '#e0e0e0', borderRadius: '10px', padding: '10px', margin: '10px 0' }}>
                        <img src={review.userLogo} alt="User Logo" style={{ borderRadius: '50%', width: '30px', height: '30px', marginRight: '10px' }} />
                        <span>{review.text}</span>
                    </div>
                )) : <p>No reviews yet.</p>}
            </div>

            {/* Review input and submit button */}
            <div className="add-review" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <div style={{ flexGrow: 1, border: '2px solid brown', padding: '5px' }}>
                    <input
                        type="text"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Review product"
                        style={{ width: '100%', padding: '5px 10px', borderRadius: '10px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginLeft: '10px', border: '2px solid purple', padding: '5px' }}>
                    <button onClick={handleReviewSubmit} style={{ padding: '5px 10px', borderRadius: '20px', background: '#888', color: '#fff' }}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewBox;
