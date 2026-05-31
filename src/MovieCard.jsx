import React from "react";

function MovieCard({ movies }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
        >

          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={movie.Title}
            className="w-full h-80 object-cover"
          />

          <div className="p-3">
            <h2 className="font-bold text-white text-base truncate">
              {movie.Title}
            </h2>
            <p className="text-gray-400 text-sm">{movie.Year}</p>
          </div>

        </div>
      ))}

    </div>
  );
}

export default MovieCard;