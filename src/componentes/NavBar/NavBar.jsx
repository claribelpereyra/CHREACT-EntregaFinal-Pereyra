import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
      <img className="imgLogo" src="../images/logo.jpeg" alt="logo" />
      </Link>

        <nav>
            <ul>          
                <li>
                  <NavLink to="/categoria/1">
                    Libros
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/2">
                    Inglés
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/4">
                    PACKS
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/3">
                    Agendas
                  </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar
