import { Link } from "react-router-dom";

function Layout() {
  return (
    <aside id="sidebar" className="text-xl">
      <Link to="/admin-dashboard">Dashboard</Link>
      <Link to="/admin/movies">Movies</Link>
      <Link to="/genres">Genres</Link>
      <Link to="/actors">Actors</Link>
      <Link>Ratings</Link>
      <Link>Users</Link>
    </aside>
  );
}

export default Layout;
