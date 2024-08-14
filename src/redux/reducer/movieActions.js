// src/redux/movieActions.js
export const addMovie = (movie) => ({
    type: 'ADD_MOVIE',
    payload: movie,
  });
  
  export const removeMovie = (movieId) => ({
    type: 'REMOVE_MOVIE',
    payload: movieId,
  });
  
  export const updateMovie = (movie) => ({
    type: 'UPDATE_MOVIE',
    payload: movie,
  });
  
  export const clearMovies = () => ({
    type: 'CLEAR_MOVIES',
  });
  
  export const fetchMovies = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://api.example.com/movies'); // Replace with your API endpoint
        const data = await response.json();
        dispatch({
          type: 'FETCH_MOVIES_SUCCESS',
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_MOVIES_ERROR',
          payload: error,
        });
      }
    };
  };
  