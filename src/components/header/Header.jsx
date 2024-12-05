import React from "react";
import styles from "./Header.module.css";
import user from "../../assets/pp (1).JPG";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {Fade,Slide,Zoom} from 'react-awesome-reveal';
import resumeImage from "../../assets/Sudharshan_S_CV.pdf";

const Header = () => {
  const handleGithub = () => {
    window.open("https://github.com/sudharshan2151");
  };

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/sudharshan2151/");
  };

  const handleResume = (e) => {

    window.open("https://drive.google.com/file/d/1DaC2SZrqlzl_6UU7_-PmJZOHt50kewNv/view");
  
      const resumePath = resumeImage;
      const downloadLink = document.createElement("a");
      downloadLink.href = resumePath;
      downloadLink.download = "Sudharshan_S_CV.pdf";
      downloadLink.click();
    
  };

  return (
    <div className={`${styles.container} `} id="home">
      <div className={styles.content_container}>
        <div className={styles.bg}></div>
        <div className={styles.content}>
          <div className={styles.title} id="user-detail-name">
            Hi, I am <br />
            <Fade triggerOnce={true} delay={1e3} cascade damping={1e-1} >Sudharshan S</Fade>
          </div>
          <div className={styles.description} >
              <Slide triggerOnce={true} duration={2000}> 
                <Zoom triggerOnce={true} duration={1000}>Programmer | Java Full Stack Developer
                </Zoom>
              </Slide>
          </div>
          <div>
            <button onClick={handleResume} id="resume-button-2">Resume</button>
          </div>
          <div className={styles.connect}>
            <FaGithub id="contact-github" onClick={handleGithub} size='1.5em' />
            <FaLinkedin id="contact-linkedin" onClick={handleLinkedin} size='1.5em' />
          </div>
        </div>
      </div>
      <div className={`${styles.image_container}`}>
        <div className={`${styles.image}`}>
          <img className={`home-img`} src={user} alt='User Pic' />
        </div>
      </div>
    </div>
  );
};

export { Header };
