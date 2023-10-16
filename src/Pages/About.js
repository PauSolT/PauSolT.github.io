import "../Styles/About.css";
import ContactMe from "../Modules/ContactMe";
import CheckLanguage from "../Modules/CheckLanguage";
import Pau from '../Images/paucv1.jpg'


function About() {
  let content = CheckLanguage();
  return (
    <div className="aboutPage">
      <div className="aboutTitle">
        <h1>PAU SOLÉ<br></br> TORRALBA</h1>
        <img src={Pau} alt="pau" className="pauImage"></img>
      </div>
      <h2>{content["grade"]}</h2>
      <h4>{content["description"]}</h4>

      <div className="formation">
        <h3>{content["formation"]}</h3>
        <h4>
        {content["form1"]}
        </h4>
        <p>{content["form1Date"]}</p>
        <h4>{content["form2"]}</h4>
        <p>{content["form2Date"]}</p>
      </div>
      <div className="knowledge">
        <div>
          <h3>{content["knowledge"]}</h3>
          <div className="knowledgeList">
            <ul>
              <li>Unity</li>
              <li>Unreal Engine</li>
              <li>C</li>
              <li>C++</li>
            </ul>
            <ul>
              <li>C#</li>
              <li>ReactJS</li>
              <li>HTML/CSS/JS</li>
              <li>Java</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>{content["languages"]}</h3>
          <ul>
            <li>{content["catalan"]}</li>
            <li>{content["spanish"]}</li>
            <li>{content["english"]}</li>
          </ul>
        </div>
      </div>
      <div className="workExperience">
        <h3>{content["work"]}</h3>
        <h4>FULL STACK DEVELOPER</h4>
        <h5>{content["work1Date"]}</h5>
        <p>
        {content["work1Description"]}
        </p>
        <h4>{content["work2"]}</h4>
        <h5>{content["work2Date"]}</h5>
        <p>
        {content["work2Description1"]}
        </p>
        <p>
        {content["work2Description2"]}
        </p>
      </div>
      <ContactMe />
    </div>
  );
}

export default About;
