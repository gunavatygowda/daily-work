import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Add note</Link> | 
      <Link to="/add">View all notes</Link>
    </nav>
  );
}

export default Navbar;
