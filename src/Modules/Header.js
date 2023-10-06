import "../Styles/Header.css";
import { Link } from "react-router-dom";
import CheckMobileScreen from "../Utils/CheckMobileScreen";
import English from "../languages/english.json";

function Header() {
  let isMobile = CheckMobileScreen();
  let content = English;

  return (
    <header>
      <div className="headerName">PAU SOLÉ TORRALBA</div>
      {isMobile ? (
        <div className="dropdown">
          <button className="dropbtn">{content["menu"]}</button>
          <div className="dropdown-content">
            <Link to="/">{content["home"]}</Link>
            <Link to="/games">{content["games"]}</Link>
            <Link to="/about">{content["about"]}</Link>
            <Link to="/">{content["contactMe"]}</Link>
          </div>
        </div>
      ) : (
        <>
          <nav className="headerOptions">
            <Link to="/">{content["home"]}</Link>
            <Link to="/games">{content["games"]}</Link>
            <Link to="/about">{content["about"]}</Link>
            <Link to="/">{content["contactMe"]}</Link>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
