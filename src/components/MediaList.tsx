import React , { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPopularMovies, setPopularMovies } from "../store/mediaSlice"; // Import actions and selectors

const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

const MediaList = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(selectPopularMovies);

  useEffect(() => {
    // Fetch popular movies (you can use axios, fetch, etc.)
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await response.json();
        dispatch(setPopularMovies(data.results));
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, [dispatch]);

  console.log(popularMovies);
  
  return (
    <div>
      <h2>Popular Movies</h2>
      <ul>
        {popularMovies?.map((movie: {id:string, title: string}) => (
          <li key={movie?.id}>{movie?.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MediaList;
