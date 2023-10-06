import Project from "../Modules/Project";
import "../Styles/Home.css";
import English from "../languages/english.json"

function Home() {

  let content = English;

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
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description={content["bekkusDescription"]}
        />
        <Project
          title="2. BILUX"
          genre={content["biluxGenre"]}
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description={content["biluxDescription"]}
        />
        <Project
          title="3. SLIME DEFENSE"
          genre={content["slimeGenre"]}
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description={content["slimeDescription"]}
        />
      </div>
    </div>
  );
}

export default Home;
