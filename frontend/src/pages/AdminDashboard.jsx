import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminDashboard (){
  const nav = useNavigate();

  const logoutLogic=()=>{

  }
<main>
<section>
    <h1>Admin Dashboard</h1>
    <Link onClick={logoutLogic}>Logout</Link>
</section>
<aside id="sidebar">
  <Link></Link>
</aside>
</main>
}

export default AdminDashboard;