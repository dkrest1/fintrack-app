import { Link } from "react-router-dom";
import HeaderImg from "../Assets/images/header_hero.png";
import HeaderImg2 from "../Assets/images/header_hero2.png";
const Header = () => {
  return (
    <header className="header">
      <div className="header__hero">
        <div className="header__hero--text">
          <h1 className="header__primary">
            <span className="header__primary--main">Fin Track</span>
            <span className="header__primary--sub">
              Track your expenditures and business transaction with FinTrack
            </span>
          </h1>
          <p className="header__primary--paragraph">
            Open a free account today to get started
          </p>
          <Link className="header__btn">Get Started</Link>
        </div>
        <div className="header__hero--image">
          <img src={HeaderImg} alt="people making transaction" />
        </div>
      </div>
      <div className="header__image">
        <img src={HeaderImg2} alt="a desktop" />
      </div>
    </header>
  );
};

export default Header;
