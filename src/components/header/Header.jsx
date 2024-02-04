import React from "react";
import styles from "./Header.module.css";
import user from "../../assets/pp (1).JPG";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import resume from "../../assets/Saravana.png"

const Header = () => {
  const handleGithub = () => {
    window.open("https://github.com/sudharshan2151");
  };

  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/sudharshan2151/");
  };

  // const handleTwitter = () => {
  //   window.open("https://twitter.com/Saravana_JN");
  // };

  const handleResume = () => {
    
    fetch("https://drive.google.com/file/d/1DaC2SZrqlzl_6UU7_-PmJZOHt50kewNv/view")
    .then((response) => response.blob())
    .then((blob) => {
      // Create a URL object from the blob
      const url = URL.createObjectURL(blob);
      // Create a temporary <a> element
      const a = document.createElement("a");
      // Set the href attribute to the URL object
      a.href = url;
      // Set the download attribute to the file name
      a.download = resume;
      // Append the <a> element to the document body
      document.body.appendChild(a);
      // Click the <a> element
      a.click();
      // Remove the <a> element from the document body
      window.open("https://drive.google.com/file/d/1DaC2SZrqlzl_6UU7_-PmJZOHt50kewNv/view");
      document.body.removeChild(a);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
  };
 
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.bg}></div>
        <div className={styles.content}>
          <div className={styles.title}>
            Hi, I am <br />
            <ScrollAnimation
              duration={2}
              animateOnce={true}
              animateIn='flipInY'
            >
              Sudharshan S
            </ScrollAnimation>
          </div>
          <div className={styles.description}>
            Programmer | Java Backend Developer
          </div>
          <div>
            <button onClick={handleResume} >Resume</button>
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
