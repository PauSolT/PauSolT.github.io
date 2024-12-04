import Game from "../Modules/Game";
import "../Styles/Games.css";
import CheckLanguage from "../Modules/CheckLanguage";
import SlimeDefenseImage from "../Images/SlimeDefense.png";
import StarTapsImage from "../Images/StarTaps.jpg";

function Games() {
  let content = CheckLanguage();
  return (
    <div className="GamesList">
      <Game
        title="1. BEKKUS"
        urlImage="https://img.itch.zone/aW1hZ2UvNjI3NjA4LzM0MDA0NzkucG5n/347x500/ZCjbFA.png"
        description={content["bekkusGame"]}
        urlSite="https://ottarastudio.itch.io/bekkus"
      />
      <Game
        title="2. BILUX"
        genre="2D ARCADE"
        urlImage="https://img.itch.zone/aW1hZ2UvNDIxNDk3LzIxMDYxMzYucG5n/347x500/r%2FeS0B.png"
        description={content["biluxGame"]}
        urlSite="https://drhut94.itch.io/bilux"
      />
      <Game
        title="3. SLIME DEFENSE"
        genre="MOBILE CASUAL"
        urlImage={SlimeDefenseImage}
        description={content["slimeGame"]}
        urlSite="https://pausol.itch.io/slime-defense"
      />
      <Game
        title="4. STAR TAPS"
        genre="MOBILE IDLE"
        urlImage={StarTapsImage}
        description={content["starGame"]}
        urlSite="https://pausol.itch.io/star-taps"
      />
    </div>
  );
}

export default Games;
