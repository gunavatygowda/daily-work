import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link to="/">Add Note</Link> |{" "}
      <Link to="/notes">View Notes</Link>
    </nav>
  );
}

export default Navbar;