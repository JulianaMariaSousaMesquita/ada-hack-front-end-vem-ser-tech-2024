import React, { useState } from 'react';
import './RatingStars.css';

interface RatingStarsProps {
  onRate: (rating: number) => void;
}

const RatingStars: React.FC<RatingStarsProps> = ({ onRate }) => {
  const [rating, setRating] = useState<number | null>(null);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    onRate(selectedRating);
  };

  return (
    <div className="rating-container">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= (rating || 0) ? 'star filled' : 'star'}
          onClick={() => handleStarClick(star)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
