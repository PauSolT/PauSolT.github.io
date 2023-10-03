import Project from "./Project";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="bodyDiv">
      <div className="introduction">
        <div className="introductionTitle">
          <h1>DEVELOPER</h1>
        </div>
        <div className="introductionDescription">
          <h3>
            Versatile video game programmer, with the ability to adapt to
            technological changes and eager to continue learning. I have the
            ability to focus completely on what concerns my work and I am used
            to working in teams. I consider myself an effective person who is
            committed to his work.
          </h3>
        </div>
      </div>
      <div className="projectList">
        <div className="projectListTitle">
          <h1>PROJECTS</h1>
        </div>
        <Project
          title="1. BEKKUS"
          genre="3D ADVENTURE GAME"
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description="A young scientist was travelling around the 
          world when suddenly a meteor crashed, 
          releasing all kind of creatures with 
          its impact. Now, determined as ever, 
          the young scientist has decided to 
          investigate them and gather as much 
          information as she can by photographing them."
        />
        <Project
          title="2. BILUX"
          genre="2D PLATFORM GAME"
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description="Bilux is a game in which you will 
          have to use movement mechanics to overcome the 
          different levels. At first it may seem easy but 
          you will quickly find levels where you will have 
          to use your ingenuity and speed of response to 
          overcome them."
        />
        <Project
          title="3. SLIME DEFENSE"
          genre="TOWER DEFENSE GAME"
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description="Slime Defense is a casual tower defense
            for mobile that consists of surviving waves of slimes
            while defending the king slime. Will you be able to
            survive to the highest wave?"
        />
      </div>
    </div>
  );
}

export default Home;
