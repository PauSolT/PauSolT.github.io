import Game from "../Modules/Game";
import "../Styles/Games.css"
import English from "../languages/english.json"

function Games() {
  let content = English;
  return (
      <div className="GamesList">
        <Game
          title="1. BEKKUS"
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description={content["bekkusGame"]}
          urlSite="https://ottarastudio.itch.io/bekkus"
        />
        <Game
          title="2. BILUX"
          genre="2D ARCADE"
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description={content["biluxGame"]}
          urlSite="https://drhut94.itch.io/bilux"
        />
        <Game
          title="3. SLIME DEFENSE"
          genre="MOBILE CASUAL"
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description={content["slimeGame"]}
          urlSite="https://drhut94.itch.io/bilux"
        />
        <Game
          title="4. STAR TAPS"
          genre="MOBILE IDLE"
          urlImage="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
          description={content["starGame"]}
          urlSite="https://pausol.itch.io/star-taps"
        />
      </div>
  );
}

export default Games;
