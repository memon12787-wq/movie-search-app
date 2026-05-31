import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const getMovies = async () => {
    setLoading(true);

    const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=yourAPIKey`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      setLoading(false);

      if (data.Response === "True") {
        setMovies(data.Search);
        setError("");
      } else {
        setMovies([]);
        setError("Movie not found!");
      }
    } catch (err) {
      setLoading(false);
      setError("Something went wrong!");
    }
  };

  useEffect(() => {
    if (searchTerm.length === 0) {
      setMovies([]);
      setMessage("");
      setError("");
      return;
    }

    if (searchTerm.length < 3) {
      setMessage("Enter at least 3 characters");
      setMovies([]);
      return;
    }

    setMessage("");
    getMovies();
  }, [searchTerm]);

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center py-10">

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {loading && (
        <p className="text-white mt-4 text-center animate-pulse">
          Loading movies...
        </p>
      )}

      {message && (
        <p className="text-yellow-400 text-center mt-3">
          {message}
        </p>
      )}

      {error && (
        <p className="text-red-400 text-center mt-2">
          {error}
        </p>
      )}

      <div className="w-full max-w-6xl">
        <MovieCard movies={movies} />
      </div>

    </div>
  );
}

export default App;