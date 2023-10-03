import Game from "../Modules/Game";
import "../Styles/Games.css"

function Games() {
  return (
      <div className="GamesList">
        <Game
          title="1. BEKKUS"
          genre="3D ADVENTURE"
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description='Bekkus was developed by a team of 2 artists and 2 developers 
          using the scrum methodology.
          I developed the logic of "bekkus", quest system, settings, UI, help 
          the artists implement some parts of the map, and implement the music.'
          urlSite="https://ottarastudio.itch.io/bekkus"
        />
        <Game
          title="2. BILUX"
          genre="2D ARCADE"
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description="Bilux was developed by a team of 2 developers.
          I developed the tutorial level and designed other levels, 
          settings, UI, health system and implemented the music."
          urlSite="https://drhut94.itch.io/bilux"
        />
        <Game
          title="3. SLIME DEFENSE"
          genre="MOBILE CASUAL"
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description="I developed this game on my own.
          It contains a wave and a shop system, different enemy types,
          music and optional ads."
          urlSite="https://drhut94.itch.io/bilux"
        />
        <Game
          title="4. STAR TAPS"
          genre="MOBILE IDLE"
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description="I developed this game on my own.
          It has different planets and satelites to unlock, prestige system to generate stars faster and music."
          urlSite="https://pausol.itch.io/star-taps"
        />
      </div>
  );
}

export default Games;
