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
                    LIBROS
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/2">
                    INGLÉS
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/4">
                    PACKS
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/5">
                    SALE
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/merch">
                    MERCH
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/3">
                    AGENDAS
                  </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar
