import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


function AdminLayout() {
    const logoutLogic = ()=> {
    
  }
  const [active, setactive] = useState(false)
  const linkLogic = () =>{
    setactive(true);

  }
  const links = [
  {
    name:"Dashboard",
    link:"/admin/dashboard"
  },
  {
    name:"Users",
    link:"/admin/users"
  },
  {
    name:"Movies",
    link:"/admin/movies"
  },
  {
    name:"Ratings",
    link:"/admin/ratings"
  },
  {
    name:"Actors",
    link:"/admin/actors"
  }
  ]
  return (
    <div className="flex">
      <aside className="w-50 min-h-screen p-4 bg-gray-900 text-white ">
        <h1 className="text-2xl mb-4">MovieVibe</h1>
        <nav className="layout flex flex-col gap-3">
        {links.map((item, idx)=>{
          return (
            <Link to={item.link} onClick={linkLogic} key={idx} className="hover:bg-black py-2 rounded-2xl text-1xl px-4 ">{item.name}</Link>
          )
        })}
        </nav>
      </aside>

      <main className="flex-1">
        <header className="bg-gray-900 h-16 items-center mb-4 py-4 px-4 flex justify-between  text-white">
          <h1 className="text-xl">Admin Panel</h1>
          <Link onClick={logoutLogic}>Logout</Link>
        </header>
        <Outlet />
  
      </main> 
</div>
  );
}

export default AdminLayout;
