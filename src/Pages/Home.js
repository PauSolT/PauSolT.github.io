import Project from "../Modules/Project";
import "../Styles/Home.css";
import CheckLanguage from "../Modules/CheckLanguage";
import SlimeDefenseImage from "../Images/SlimeDefense.png"

function Home() {

  let content = CheckLanguage();

  return (
    <div className="bodyDiv">
      <div className="introduction">
        <div className="introductionTitle">
          <h1>DEVELOPER</h1>
        </div>
        <div className="introductionDescription">
          <h3>
            {content["homeDescription"]}
          </h3>
        </div>
      </div>
      <div className="projectList">
        <div className="projectListTitle">
          <h1>{content["projectsTitle"]}</h1>
        </div>
        <Project
          title="1. BEKKUS"
          genre={content["bekkusGenre"]}
          urlImage="https://img.itch.zone/aW1hZ2UvNjI3NjA4LzM0MDA0NzkucG5n/347x500/ZCjbFA.png"
          description={content["bekkusDescription"]}
        />
        <Project
          title="2. BILUX"
          genre={content["biluxGenre"]}
          urlImage="https://img.itch.zone/aW1hZ2UvNDIxNDk3LzIxMDYxMzYucG5n/347x500/r%2FeS0B.png"
          description={content["biluxDescription"]}
        />
        <Project
          title="3. SLIME DEFENSE"
          genre={content["slimeGenre"]}
          urlImage={SlimeDefenseImage}
          description={content["slimeDescription"]}
        />
      </div>
    </div>
  );
}

export default Home;
