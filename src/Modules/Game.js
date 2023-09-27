import "../Styles/Game.css";

function Game({ title, genre, description, urlImage, urlSite }) {
  return (
    <div className="game">
      <div className="gameHeader">
        <h3>{title}</h3>
        <h3>
          <a target="_blank" rel="noreferrer" href={urlSite}>
            GO TO SITE
          </a>
        </h3>
      </div>
      <img src={urlImage} alt={title} className="responsiveImage"></img>
      <h4>{genre}</h4>
      <p>{description}</p>
    </div>
  );
}

//Explain what systems did i do in these games and which methodology i used

export default Game;
