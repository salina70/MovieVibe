import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Movies() {
  const nav = useNavigate();
  const [search, setSearch] = useState("")
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/movies");
        setMovies(res.data.movies);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const searchLogic = (e)=>{
    if(e.key==="Enter"){
      let inputData = e.target.value.toLowerCase();
    console.log("enter")

    }
  }


  // Get all unique genres from movies
  const genres = [
    "All",
    ...new Set(movies.flatMap((movie) => movie.genre || [])),
  ];

  // Filter movies
  const filteredMovies =
    selectedGenre === "All"
      ? movies
      : movies.filter((movie) =>
          movie.genre?.includes(selectedGenre)
        );

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">

      {/* Header */}
      <div className="max-w-[1500px] mx-auto">

        <div className="flex justify-between mx-7">
          <div>
            <h1 className="text-4xl font-bold mb-2">
          All Movies
        </h1>

        <p className="text-gray-400 mb-8">
          Explore movies and discover your next favorite.
        </p>
          </div>
          <div>
            <Input onKeyDown={searchLogic} type="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="search any movie" />
          </div>
        </div>

        {/* Genre Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">

          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                selectedGenre === genre
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {genre}
            </button>
          ))}

        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

          {filteredMovies.map((movie) => (
            <div
            onClick={()=>{nav(`/movies/${movie._id}`)}}
              key={movie._id}
              className="movieCard bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300 hover:-translate-y-1"
            >

              {/* Poster */}
              <div className="relative">

                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-52 object-cover"
                />

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full text-sm">
                  ⭐ {movie.rating}
                </div>

              </div>

              {/* Movie Info */}
              <div className="p-4">

                <h2 className="text-lg font-bold mb-2 truncate">
                  {movie.title}
                </h2>

                <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                  {movie.description}
                </p>

                {/* Language */}
                <div className="text-xs text-gray-500">
                 <strong> Language:{" "}</strong>
                  <em className="text-gray-300">
                    {movie.language}
                  </em>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Movies */}
        {filteredMovies.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            No movies found for "{selectedGenre}".
          </div>
        )}

      </div>
    </div>
  );
}

export default Movies;