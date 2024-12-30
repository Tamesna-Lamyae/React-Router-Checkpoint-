import React from 'react';

const Filter = ({ filterTitle, filterRating, onTitleChange, onRatingChange }) => {
  return (
    <div className="flex space-x-4 mb-8 justify-center">
      {/* Title Filter */}
      <input
        type="text"
        placeholder="Filter by Title"
        value={filterTitle}
        onChange={(e) => onTitleChange(e.target.value)}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Rating Filter (0-10 range) */}
      <input
        type="number"
        placeholder="Filter by Rating (0-10)"
        value={filterRating}
        onChange={(e) => onRatingChange(Number(e.target.value))}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filter;
