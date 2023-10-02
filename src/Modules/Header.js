import "../Styles/Header.css";
import { Link } from "react-router-dom";
import CheckMobileScreen from "../Utils/CheckMobileScreen";

function Header() {
  let isMobile = CheckMobileScreen();
  return (
    <header>
      <div className="headerName">PAU SOLÉ TORRALBA</div>
      {isMobile ? (
        <div className="dropdown">
          <button className="dropbtn">MENU</button>
          <div className="dropdown-content">
            <Link to="/">HOME</Link>
            <Link to="/games">GAMES</Link>
            <Link to="/">ABOUT</Link>
            <Link to="/">CONTACT ME</Link>
          </div>
        </div>
      ) : (
        <>
          <nav className="headerOptions">
            <Link to="/">HOME</Link>
            <Link to="/games">GAMES</Link>
            <Link to="/">ABOUT</Link>
            <Link to="/">CONTACT ME</Link>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
