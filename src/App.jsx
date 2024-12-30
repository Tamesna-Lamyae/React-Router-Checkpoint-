import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './Component/MovieList';
import Filter from './Component/Filter';
import AddMovie from './Component/AddMovie';
import MovieDetails from './Component/MovieDetails';

const App = () => {
  // Initialize movies state with localStorage or default values
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies
      ? JSON.parse(savedMovies)
      : [
          {
            title: "The Secret Garden",
            description: "A young orphan discovers a magical garden hidden at her strict uncle's estate, changing their lives forever.",
            posterURL: "https://i.pinimg.com/736x/2c/cf/7a/2ccf7a2c575899c210893878dcd42ac1.jpg",
            rating: 7.4,
            trailer: "https://youtu.be/sWfgTiJ3sCs?si=Uz3VJAhNVlY_GCo-",
          },
          {
            title: "Home Alone",
            description: "An 8-year-old boy is accidentally left home alone during Christmas and must defend his house from two clumsy burglars.",
            posterURL: "https://i.pinimg.com/736x/4e/27/8d/4e278d8db6710b3735140c5dcf4f3f71.jpg",
            rating: 7.7,
            trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          {
            title: "Reisen til Julestjernen",
            description: "A brave girl sets out to find a magic Christmas star to free her kingdom from a curse.",
            posterURL: "https://i.pinimg.com/736x/6a/db/83/6adb83ba9d8a732eedaec2fdc35cf0ad.jpg",
            rating: 6.8,
            trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          {
            title: "Crimson Peak",
            description: "A young author is swept away to her mysterious husband’s gothic mansion, haunted by dark secrets and ghosts of the past.",
            posterURL: "https://i.pinimg.com/736x/c4/63/ff/c463ff4ea805db939afca7146e49080c.jpg",
            rating: 6.6,
            trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
        ];
  });

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  // Update localStorage whenever movies state changes
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const handleAddMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <Router>
      <div className="container text-center mx-auto p-4">
        <h1 className="text-5xl font-bold m-12 text-gray-700">My Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  filterTitle={filterTitle}
                  filterRating={filterRating}
                  onTitleChange={setFilterTitle}
                  onRatingChange={setFilterRating}
                />
                <AddMovie onAddMovie={handleAddMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          <Route path="/movie/:title" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
