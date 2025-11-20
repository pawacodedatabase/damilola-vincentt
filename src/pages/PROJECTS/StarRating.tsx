import React, { useState } from 'react';

const StarRating: React.FC<{ initialRating?: number }> = ({ initialRating = 0 }) => {
  const [rating, setRating] = useState<number>(initialRating);

  const handleClick = (index: number) => {
    setRating(index + 1); // Set rating to the clicked star's index
  };

  const stars = Array.from({ length: 5 }, (_, index) => {
    const isFilled = index < rating; // If the index is less than the rating, it’s filled
    return (
      <span
        key={index}
        onClick={() => handleClick(index)}
        className={`cursor-pointer text-2xl ${isFilled ? 'text-yellow-500' : 'text-gray-400'}`}
      >
        ★
      </span>
    );
  });

  return <div>{stars}</div>;
};

export default StarRating;
