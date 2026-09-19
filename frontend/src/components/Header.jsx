import { Link } from "react-router-dom";
import { Heart, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

function Header() {
  return (
    <header className="w-full bg-black text-white z-1000 fixed top-0">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <span>MovieVibe</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm hover:text-red-500 transition"
          >
            Home
          </Link>

          <Link
          to="/movies"
            className="text-sm hover:text-red-500 transition"
          >
            Movies
          </Link>

          <Link
            to="/favorites"
            className="flex items-center gap-1 text-sm hover:text-red-500 transition"
          >
            <Heart className="h-4 w-4" />
            Favorites
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">

          {/* Search */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-red-500"
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Login */}
          <Link to="/login">
            <Button
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white hover:text-black"
            >
              Login
            </Button>
          </Link>

          {/* Register */}
          <Link to="/register">
            <Button className="bg-red-600 hover:bg-red-700">
              Sign Up
            </Button>
          </Link>

        </div>
      </div>
    </header>
  );
}

export default Header;