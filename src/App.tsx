import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY;

    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
    fetchPopularMovies()
  }, []);
  return (
    <div className="App">
    </div>
  );
}

export default App;
