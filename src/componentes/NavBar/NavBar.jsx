import CardWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavaBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>KEMPES LIBROS</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/idCat/2">Libros</NavLink>
          </li>

          <li>
            <NavLink to="/idCat/3">Agendas</NavLink>
          </li>
        </ul>
      </nav>
      <CardWidget />
    </header>
  );
};

export default NavaBar;
