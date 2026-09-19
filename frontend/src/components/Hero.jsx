import React from "react";
import { Search, Star, Film, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-black text-white">
      
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]" />

      {/* Main Hero */}
      <div className="container relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-8 px-6 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="z-10 max-w-2xl -translate-y-2 mt-5">

          {/* Small heading */}
          <div className="mb-5 flex items-center gap-3 text-sm text-gray-400">
            <span>Discover</span>
            <span>•</span>
            <span>Explore</span>
            <span>•</span>
            <span>Watch</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Find Your Next
            <span className="block text-red-500">
              Favorite Movie
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-xl text-lg leading-8 text-gray-400">
            Get personalized movie recommendations based on your taste.
            Explore new stories, and never run out of
            great movies to watch.
          </p>

          {/* Search */}
          <div className="mt-6 flex max-w-2xl items-center gap-2 rounded-full border border-gray-700 bg-gray-900/80 p-2 shadow-xl">
            <Search className="ml-4 h-5 w-5 text-gray-400" />

            <Input
              type="text"
              placeholder="Search for movies, genres, actors..."
              className="border-0 bg-transparent text-white placeholder:text-gray-500 focus-visible:ring-0"
            />

            <Button className="rounded-full bg-red-500 px-7 hover:bg-red-600">
              Search
            </Button>
          </div>

        </div>

        {/* RIGHT MOVIE COLLAGE */}
        <div className="relative hidden h-[600px] lg:block">

          {/* Image 1 */}
          <div className="absolute right-[45%] top-8 h-[480px] w-[230px] rotate-6 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg"
              alt="Movie"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="absolute right-[20%] top-16 z-10 h-[520px] w-[250px] -rotate-2 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
              alt="Movie"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="absolute right-[-2%] top-24 h-[460px] w-[220px] rotate-6 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
              alt="Movie"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
        </div>
      </div>

      {/* FEATURES */}
      <div className="container relative mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Feature 1 */}
          <div className="group">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
              <Star className="h-7 w-7" />
            </div>

            <h3 className="text-lg font-semibold">
              Personalized Recommendations
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Get movie suggestions tailored to your unique taste.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
              <Film className="h-7 w-7" />
            </div>

            <h3 className="text-lg font-semibold">
              Explore Genres
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              From action to romance, find movies in every genre.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
              <Heart className="h-7 w-7" />
            </div>

            <h3 className="text-lg font-semibold">
              Save Your Favorites
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Keep track of the movies you love.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="group">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
              <Users className="h-7 w-7" />
            </div>

            <h3 className="text-lg font-semibold">
              Discover New Gems
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Find hidden gems and popular hits.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Hero;