import "../Styles/Footer.css"

function Footer(){
    return (
    <footer>
        <div className="footerOptions">
          <div>
            ABOUT
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