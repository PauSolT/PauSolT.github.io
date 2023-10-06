import "../Styles/ContactMe.css";
import English from "../languages/english.json"

function ContactMe() {
  let content = English;
  return (
    <div className="contactModule">
      <h2>{content["contactMe"]}</h2>
      <p>
        {content["contactDescription"]}{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/pau-sol%C3%A9-torralba-bb8b14176/"
        >
          LINKEDIN
        </a>
      </p>
    </div>
  );
}

export default ContactMe;
