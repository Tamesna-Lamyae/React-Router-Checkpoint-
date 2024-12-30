import { useParams, useNavigate } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { title } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((movie) => movie.title === title);

  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  return (
    <div className="container mx-auto p-4 text-left">
      <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
      <p className="mb-4">{movie.description}</p>
      <iframe
        className="w-full h-64"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <button onClick={() => navigate('/')} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"> Back to Home</button>
    </div>
  );
};

export default MovieDetails;
