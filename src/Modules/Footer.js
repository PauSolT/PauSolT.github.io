import "../Styles/Footer.css";
import CheckLanguage from "./CheckLanguage";
import { Link } from "react-router-dom";

function Footer() {
  let content = CheckLanguage();

  return (
    <footer>
      <div className="footerOptions">
        <div className="footerAboutMe">
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
        </div>
        <div className="footerSocials">
          <div>
            <a target="_blank" rel="noreferrer" href="https://pausol.itch.io">
              ITCH.IO
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/pau-sol%C3%A9-torralba-bb8b14176/"
            >
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
