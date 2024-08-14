// src/redux/movieReducer.js
const initialState = {
    movies: [],
    error: null,
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES_SUCCESS':
        return {
          ...state,
          movies: action.payload,
        };
      case 'FETCH_MOVIES_ERROR':
        return {
          ...state,
          error: action.payload,
        };
      case 'ADD_MOVIE':
        return {
          ...state,
          movies: [...state.movies, action.payload],
        };
      case 'REMOVE_MOVIE':
        return {
          ...state,
          movies: state.movies.filter((movie) => movie.id !== action.payload),
        };
      case 'UPDATE_MOVIE':
        return {
          ...state,
          movies: state.movies.map((movie) =>
            movie.id === action.payload.id ? action.payload : movie
          ),
        };
      case 'CLEAR_MOVIES':
        return {
          ...state,
          movies: [],
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  