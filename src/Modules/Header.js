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
        <div
          className="headerLanguage"
          onClick={() => ChangeLanguageToCatalan()}
        >
          CAT
        </div>
        <div
          className="headerLanguage"
          onClick={() => ChangeLanguageToSpanish()}
        >
          ESP
        </div>
        <div
          className="headerLanguage"
          onClick={() => ChangeLanguageToEnglish()}
        >
          ENG
        </div>
      </div>
      {isMobile ? (
        <div className="dropdown">
          <button className="dropbtn">{content["menu"]}</button>
          <div className="dropdown-content">
            <Link to="/">{content["home"]}</Link>
            <Link to="/games">{content["games"]}</Link>
            <Link
              to="/about"
              onClick={() => {
                setTimeout(
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  }),
                  500
                );
              }}
            >
              {content["about"]}
            </Link>
            <Link
              to="/about"
              onClick={() => {
                setTimeout(
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  }),
                  500
                );
              }}
            >
              {content["contactMe"]}
            </Link>
          </div>
        </div>
      ) : (
        <>
          <nav className="headerOptions">
            <Link to="/">{content["home"]}</Link>
            <Link to="/games">{content["games"]}</Link>
            <Link
              to="/about"
              onClick={() => {
                setTimeout(
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  }),
                  500
                );
              }}
            >
              {content["about"]}
            </Link>
            <Link
              to="/about"
              onClick={() => {
                setTimeout(
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  }),
                  500
                );
              }}
            >
              {content["contactMe"]}
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}

function ChangeLanguageToEnglish() {
  localStorage.setItem("lang", "eng");
  window.scrollTo({
    top: 0,
  });
  window.location.reload(true);
}

function ChangeLanguageToSpanish() {
  localStorage.setItem("lang", "esp");
  window.scrollTo({
    top: 0,
  });
  window.location.reload(true);
}

function ChangeLanguageToCatalan() {
  localStorage.setItem("lang", "cat");
  window.scrollTo({
    top: 0,
  });
  window.location.reload(true);
}

export default Header;
