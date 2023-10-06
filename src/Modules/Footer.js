import "../Styles/Footer.css"
import English from "../languages/english.json"

function Footer(){
let content = English;

    return (
    <footer>
        <div className="footerOptions">
          <div>
            {content["about"]}
          </div>
          <div className='footerSocials'>
            <div>
                <a target='_blank' rel="noreferrer" href='https://pausol.itch.io'>ITCH.IO</a>
            </div>
            <div>
                <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/pau-sol%C3%A9-torralba-bb8b14176/'>LINKEDIN</a> 
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;