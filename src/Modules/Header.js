import "../Styles/Header.css";
import {Link} from "react-router-dom";


function Header() {
  return (
    <header>
      <div className="headerName">PAU SOLÉ TORRALBA</div>
      <nav className="headerOptions">
          <Link to="/">
            HOME
          </Link>
          <Link to="/games" >
          GAMES
          </Link>
          <Link to="/">
          ABOUT
          </Link>
          <Link to="/">
          CONTACT ME
          </Link>
      </nav>
    </header>
  );
}

export default Header;
