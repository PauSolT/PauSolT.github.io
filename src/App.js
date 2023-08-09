import './App.css';
import Project from './Project';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <div className='bodyDiv'>
        <div className="introduction">
          <div className="introductionTitle">
            <h1>DEVELOPER</h1>
          </div>
          <div className="introductionDescription">
            <h3>introduction text</h3>
          </div>
        </div>
        <div className='projectList'>
          <div>
            <h2>PROJECTS</h2>
          </div>
          <Project title='1. BEKKUS'
          genre='3D ADVENTURE GAME'
          urlImage='https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg'
          description='A young scientist was travelling around the 
          world when suddenly a meteor crashed, 
          releasing all kind of creatures with 
          its impact. Now, determined as ever, 
          the young scientist has decided to 
          investigate them and gather as much 
          information as she can by photographing them.'
          />
          <Project title='2. BILUX'
          genre='2D PLATFORM GAMES'
          urlImage='https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg'
          description='Bilux is a game in which you will 
          have to use movement mechanics to overcome the 
          different levels. At first it may seem easy but 
          you will quickly find levels where you will have 
          to use your ingenuity and speed of response to 
          overcome them.'
          />
        </div>
        </div>
      </body>
      <footer>
        footer  
      </footer>
    </div>
  );
}

export default App;
