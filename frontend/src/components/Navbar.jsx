import { Link } from "react-router-dom";
import Logo from "../Assets/images/logo.svg";
const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="nav__logo">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
