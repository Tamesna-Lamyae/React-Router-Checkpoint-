import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
      <img src={movie.posterURL}  alt={movie.title} className="w-full h-80 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
      <p className="text-gray-600">{movie.description.slice(0, 100)}...</p>
      <p className="text-yellow-500 font-semibold">Rating: {movie.rating}</p>
      <Link to={`/movie/${movie.title}`} className="inline-block mt-4 text-blue-500"> View Details </Link>
    </div>
  );
};

export default MovieCard;
