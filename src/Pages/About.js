import "../Styles/About.css";

function About() {
  return (
    <div className="aboutPage">
      <h1>PAU SOLÉ TORRALBA</h1>
      <h2>
        VIDEOGAME DEVELOPMENT TECHNICIAN, APPLIED GAMES AND MOBILE APPLICATIONS
      </h2>
      <h4>
        Versatile video game programmer, with the ability to adapt to
        technological changes and eager to continue learning. I have the ability
        to focus completely on what concerns my work and I am used to working in
        teams. I consider myself an effective person who is committed to his
        work.
      </h4>

      <div className="formation">
        <h3>FORMATION</h3>
        <h4>
          CERTIFICATE OF HIGHER EDUCATION IN CROSS-PLATFORM APPLICATION
          DEVELOPMENT FOR VIDEO GAMES
        </h4>
        <p>ENTI-UB | Sep 2018 - Jun 2020</p>
        <h4>TECHNOLOGYC HIGH-SCHOOL</h4>
        <p>INS Vila de Gràcia | Sep 2016 - Jun 2018</p>
      </div>
      <div className="knowledge">
        <div>
          <h3>KNOWLEDGE</h3>
          <div className="knowledgeList">
            <ul>
              <li>Unity</li>
              <li>Unreal Engine</li>
              <li>C</li>
              <li>C++</li>
            </ul>
            <ul>
              <li>C#</li>
              <li>ReactJS</li>
              <li>HTML/CSS/JS</li>
              <li>Java</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>LANGUAGES</h3>
          <ul>
            <li>Catalan</li>
            <li>Spanish</li>
            <li>English</li>
          </ul>
        </div>
      </div>
      <div className="workExperience">
        <h3>WORK EXPERIENCE</h3>
        <h4>
        FULL STACK DEVELOPER
        </h4>
        <h5>Ship Quik Tecnologia S.L. | Jul 2021- Mar 2022</h5>
        <p>Frontend and backend programmer of the web page using ReactJS, 
            Redux, NodeJS, MUI, Formik and NPM with Agile metodology.</p>
            <h4>
            DEVELOPER (INTERNSHIPS)
            </h4>
        <h5>Twentic S.L. | Oct 2019 - Mar 2020 </h5>
        <p>· Creation and programming of a virtual reality route of a 
            property on a map, with Unity.
        </p>
        <p>· Programming of a 2D platform game with score 
            table per server and multiple levels, with Phaser.
        </p>
      </div>
    </div>
  );
}

export default About;
