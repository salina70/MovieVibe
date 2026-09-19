import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const singleData = async () => {
      let { data } = await axios.get(`http://localhost:8000/api/movies/${id}`);
      setMovie(data.movie ?? {});
    };
    singleData();
  }, [id]);

  if (!movie) return "no movies";

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <Link
        to="/movies"
          variant="outline"
          className="bg-gray-900 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
        >
          <i className="fa-solid fa-arrow-left"></i> Back to Movies
        </Link>
      </div>

      {/* Movie Details */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10">
          {/* Poster */}
          <div>
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-[450px] object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">
            {/* Title */}
            <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-yellow-400 text-xl">⭐ {movie.rating}</span>

              <span className="text-gray-500">/ 10</span>
            </div>

            {/* Genre */}
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genre &&
                movie.genre.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-sm"
                  >
                    {genre}
                  </span>
                ))}
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-7 mb-6 max-w-3xl">
              {movie.description}
            </p>

            {/* Language */}
            <div className="mb-5">
              <p className="text-gray-500 text-sm">Language</p>

              <p className="text-gray-200">{movie.language}</p>
            </div>

            {/* Cast */}
            <div className="mb-8">
              <p className="text-gray-500 text-sm mb-2">Cast</p>

              <div className="flex flex-wrap gap-2">
                {movie.cast &&
                  movie.cast.map((actor) => (
                    <span
                      key={actor}
                      className="bg-gray-800 px-3 py-2 rounded-lg text-sm text-gray-300"
                    >
                      {actor}
                    </span>
                  ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button className="bg-red-600 hover:bg-red-700">
                ❤️ Add to Favorites
              </Button>

              <Button
                variant="outline"
                className="bg-gray-900 border-gray-700 hover:bg-gray-800"
              >
                ▶ Watch Trailer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
