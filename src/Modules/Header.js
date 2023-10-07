import "../Styles/Header.css";
import { Link } from "react-router-dom";
import CheckMobileScreen from "../Utils/CheckMobileScreen";
import CheckLanguage from "./CheckLanguage";


function Header() {
  let isMobile = CheckMobileScreen();
  let content = CheckLanguage();

  return (
    <header>
      <div className="headerName">
        <div className="headerLanguage" onClick={() => ChangeLanguageToCatalan()}>
          CAT
        </div>
        <div className="headerLanguage"onClick={() => ChangeLanguageToSpanish()}>
          ESP
        </div>
        <div className="headerLanguage"onClick={ () => ChangeLanguageToEnglish()}>
          ENG
        </div>
      </div>
      {isMobile ? (
        <div className="dropdown">
          <button className="dropbtn">{content["menu"]}</button>
          <div className="dropdown-content">
            <Link to="/">{content["home"]}</Link>
            <Link to="/games">{content["games"]}</Link>
            <Link to="/about">{content["about"]}</Link>
            <Link to="/about">{content["contactMe"]}</Link>
          </div>
        </div>
      ) : (
        <>
          <nav className="headerOptions">
            <Link to="/">{content["home"]}</Link>
            <Link to="/games">{content["games"]}</Link>
            <Link to="/about">{content["about"]}</Link>
            <Link to="/about"><a href="#down">{content["contactMe"]}</a></Link>
          </nav>
        </>
      )}
    </header>
  );
}

function ChangeLanguageToEnglish()
{
  localStorage.setItem('lang', 'eng');
  window.location.reload();
}

function ChangeLanguageToSpanish()
{
  localStorage.setItem('lang', 'esp');
  window.location.reload();
}

function ChangeLanguageToCatalan()
{
  localStorage.setItem('lang', 'cat');
  window.location.reload();
}

export default Header;
