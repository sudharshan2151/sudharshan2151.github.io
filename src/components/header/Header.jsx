import React from "react";
import styles from "./Header.module.css";
import user from "../../assets/pp (1).JPG";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import resumeImage from "../../assets/Sudharshan S-Resume_page-0001.jpg";

const Header = () => {
  const handleGithub = () => {
    window.open("https://github.com/sudharshan2151");
  };

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/sudharshan2151/");
  };

  const handleResume = (e) => {
    // Open the Google Drive link
    window.open("https://drive.google.com/file/d/1DaC2SZrqlzl_6UU7_-PmJZOHt50kewNv/view");
  
      const resumePath = resumeImage;
      const downloadLink = document.createElement("a");
      downloadLink.href = resumePath;
      downloadLink.download = "Sudharshan S-Resume_page-0001.jpg";
      downloadLink.click();
    
  };

  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.bg}></div>
        <div className={styles.content}>
          <div className={styles.title}>
            Hi, I am <br />
            <ScrollAnimation duration={2} animateOnce={true} animateIn='flipInY'>
              Sudharshan S
            </ScrollAnimation>
          </div>
          <div className={styles.description}>Programmer | Java Backend Developer</div>
          <div>
            <button onClick={handleResume}>Resume</button>
          </div>
          <div className={styles.connect}>
            <FaGithub onClick={handleGithub} size='1.5em' />
            <FaLinkedin onClick={handleLinkedin} size='1.5em' />
          </div>
        </div>
      </div>
      <div className={styles.image_container}>
        <div className={styles.image}>
          <img src={user} alt='User Pic' />
        </div>
      </div>
    </div>
  );
};

export { Header };
