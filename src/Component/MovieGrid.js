import React, { useState, useEffect } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import "./MovieGrid.css";

const API_KEY = "49a5508b99e54cbf67438655e1565e32"; // Replace with your actual TMDB API key
const API_BASE_URL = "https://api.themoviedb.org/3";

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1); // Current page
  const [selectedMovie, setSelectedMovie] = useState(null); // Selected movie

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [page]); // Refetch movies when page changes

  const handleNextPage = () => {
    if (page < 3) setPage((prevPage) => prevPage + 1); // Increment page till 3
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prevPage) => prevPage - 1); // Decrement page till 1
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie); // Set the selected movie
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null); // Close the movie details
  };

  return (
    <div>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => handleMovieClick(movie)} // Add click handler
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <Rating
              name="movie-rating"
              value={movie.vote_average / 2}
              precision={0.5}
              readOnly
            />
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Button onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </Button>
        <span>Page {page}</span>
        <Button onClick={handleNextPage} disabled={page === 3}>
          Next
        </Button>
      </div>
      {selectedMovie && (
        <div className="movie-details">
          <Button className="close-button" onClick={handleCloseDetails}>
            Close
          </Button>
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.backdrop_path}`}
            alt={selectedMovie.title}
          />
          <p>Release Date: {selectedMovie.release_date}</p>
          <p>Rating: {selectedMovie.vote_average}</p>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;
