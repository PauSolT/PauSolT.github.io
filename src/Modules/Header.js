import './Header.css';

function Header(){
    return (
    <header>
        <div className="headerName">
        PAU SOLÉ TORRALBA
        </div>
        <div className="headerOptions">
          <div>
            HOME
          </div>
          <div>
            GAMES
          </div>
          <div>
            ABOUT
          </div>
          <div>
            CONTACT ME
          </div>
        </div>
      </header>
    );
}

export default Header;