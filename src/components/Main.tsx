import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import my_profile from "../assets/images/myporf.jpg";
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={my_profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Ayyappa19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ayyappa-swamy-y-521234258/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ayyappa Swamy</h1>
          <p>Web Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Ayyappa19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ayyappa-swamy-y-521234258/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;