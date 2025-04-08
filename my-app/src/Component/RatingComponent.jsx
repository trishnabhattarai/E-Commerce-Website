import React from 'react';
import './RatingComponent.css'; // Import the CSS file

const RatingComponent = ({ overallRating, totalReviews, reviews }) => {
  const calculateBreakdown = (reviews) => {
    const total = reviews.length;
    const breakdown = { excellent: 0, good: 0, average: 0, belowAverage: 0, poor: 0 };

    reviews.forEach((review) => {
      if (review.rating === 5) breakdown.excellent++;
      else if (review.rating === 4) breakdown.good++;
      else if (review.rating === 3) breakdown.average++;
      else if (review.rating === 2) breakdown.belowAverage++;
      else if (review.rating === 1) breakdown.poor++;
    });

    return {
      excellent: ((breakdown.excellent / total) * 100).toFixed(0),
      good: ((breakdown.good / total) * 100).toFixed(0),
      average: ((breakdown.average / total) * 100).toFixed(0),
      belowAverage: ((breakdown.belowAverage / total) * 100).toFixed(0),
      poor: ((breakdown.poor / total) * 100).toFixed(0),
    };
  };

  const starPercentage = (rating) => {
    return (rating / 5) * 100 + '%';
  };

  const breakdown = calculateBreakdown(reviews);

  return (
    <div className="rating-component" style={{ position: "absolute",
        top: "220px", // Adjust this based on your layout
        right: "200px", // Move the box more to the right
        width: "300px", // Set a fixed width for the box
        padding: "10px",}}>
      {/* Overall Rating */}
      <div className="overall-rating">
        <h2>{overallRating.toFixed(1)}</h2>
        <div className="stars">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={`star ${index < Math.round(overallRating) ? 'filled' : ''}`}
            >
              ★
            </span>
          ))}
        </div>
        <p>based on {totalReviews} reviews</p>
      </div>

      {/* Breakdown */}
      <div className="rating-breakdown">
        <div className="review-bar">
          <span>Excellent</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: starPercentage(breakdown.excellent) }}></div>
          </div>
          <span>{breakdown.excellent}%</span>
        </div>

        <div className="review-bar">
          <span>Good</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: starPercentage(breakdown.good) }}></div>
          </div>
          <span>{breakdown.good}%</span>
        </div>

        <div className="review-bar">
          <span>Average</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: starPercentage(breakdown.average) }}></div>
          </div>
          <span>{breakdown.average}%</span>
        </div>

        <div className="review-bar">
          <span>Below Average</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: starPercentage(breakdown.belowAverage) }}></div>
          </div>
          <span>{breakdown.belowAverage}%</span>
        </div>

        <div className="review-bar">
          <span>Poor</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: starPercentage(breakdown.poor) }}></div>
          </div>
          <span>{breakdown.poor}%</span>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;
