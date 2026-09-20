import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const [data, setdata] = useState({
    users: "",
    movies: "",
    ratings: "",
    genres: "",
  });
  useEffect(() => {
    const loadData = async () => {
      try {
        const users = await axios.get("http://localhost:8000/api/admin/data");
        setdata(users.data.message);
      } catch (error) {
        console.log(error);
      }

      console.log(data.users);
    };
    loadData();
  }, []);

  return (
    <>
      <main>
        <section className="admin-card flex flex-wrap gap-6 mx-8 justify-center">
          <article>
            <span>{data.users}</span>Total Users
          </article>
          <article>
            <span>{data.movies}</span>Total Movie
          </article>
          <article>
            <span>{data.ratings}</span>Total Ratings
          </article>
          <article>
            <span>{data.genres} </span>Total Genre
          </article>
        </section>
      </main>
    </>
  );
}

export default AdminDashboard;
