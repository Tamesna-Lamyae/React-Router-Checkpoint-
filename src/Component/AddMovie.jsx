import { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
      if (newMovie.rating < 0 || newMovie.rating > 10) {
        alert("Rating must be between 0 and 10.");
      } else {
        onAddMovie({ ...newMovie, rating: Number(newMovie.rating) });
        setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
      }
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mb-12">
      {/* Title Input */}
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Description Input */}
      <div>
        <textarea
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* Poster URL Input */}
      <div>
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Rating Input (0-10 range) */}
      <div>
        <input
          type="number"
          name="rating"
          placeholder="Rating (0-10)"
          value={newMovie.rating}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
          max="10"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200">
          Add Movie
        </button>
      </div>
    </form>
  );
};

export default AddMovie;
