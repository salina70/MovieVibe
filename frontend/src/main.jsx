import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Movies from "./pages/Movies.jsx";
import MovieDetails from "./pages/MovieDetails";
import NotFound from "./pages/NotFound";
import AdminLayout from "../admin/AdminLayout.jsx";
import AdminDashboard from "../admin/AdminDashboard.jsx";
import ManageGenres from "../admin/ManageGenres";
import ManageUsers from "../admin/ManageUsers";
import ManageRatings from "../admin/ManageRatings";
import ManageActors from "../admin/ManageActors";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/movies" element={<Movies />} />
        <Route
  path="/movies/:id"
  element={<MovieDetails />}
/>
<Route path="*" element={<NotFound/>} />

<Route path="/admin" element={<AdminLayout/>}>
<Route path="dashboard" element={<AdminDashboard/>} />
<Route path="movies" element={<manageMovies/>} />
<Route path="ratings" element={<ManageRatings/>} />
<Route path="genres" element={<ManageGenres/>} />
<Route path="users" element={<ManageUsers/>} />
<Route path="actors" element={<ManageActors/>} />
</Route>

<Route>
  <Route  />
</Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
