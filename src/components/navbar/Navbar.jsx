import React from "react";
import styles from "./Navbar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import resumeImage from "../../assets/Sudharshan S-Resume_page-0001.jpg";

const NavLinks = ({ setVerticalOpen, handleSectionScroll }) => {
  return (
    <>
      <div
        className={styles.nav_links}
        onClick={() => {
          setVerticalOpen(false);
          handleSectionScroll("about");
        }}
      >
        About
      </div>
      <div
        className={styles.nav_links}
        onClick={() => {
          setVerticalOpen(false);
          handleSectionScroll("skills");
        }}
      >
        Skills
      </div>
      <div
        className={styles.nav_links}
        onClick={() => {
          setVerticalOpen(false);
          handleSectionScroll("tools");
        }}
      >
        Tools
      </div>
      <div
        className={styles.nav_links}
        onClick={() => {
          setVerticalOpen(false);
          handleSectionScroll("projects");
        }}
      >
        Projects
      </div>
      <div
        className={styles.nav_links}
        onClick={() => {
          setVerticalOpen(false);
          handleSectionScroll("contact");
        }}
      >
        Contact
      </div>
      <div
        className={styles.nav_links}
        
        onClick={() => {
          setVerticalOpen(false);
          handleSectionScroll("resume");
          window.open("https://drive.google.com/file/d/1DaC2SZrqlzl_6UU7_-PmJZOHt50kewNv/view");
          const resumePath = resumeImage;
          const downloadLink = document.createElement("a");
          downloadLink.href = resumePath;
          downloadLink.download = "Sudharshan S-Resume_page-0001.jpg";
          downloadLink.click();
        }}
      >
        Resume
      </div>
    </>
  );
};

const Navbar = ({ handleSectionScroll }) => {
  const [verticalOpen, setVerticalOpen] = React.useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.nav_container}>
        <div
          className={styles.logo}
          onClick={() => {
            setVerticalOpen(false);
            handleScroll();
          }}
        >
          SS
        </div>
        <div className={styles.grow}></div>
        <div className={styles.horizontal_nav}>
          <NavLinks
            setVerticalOpen={setVerticalOpen}
            handleSectionScroll={handleSectionScroll}
          />
        </div>
        <div
          className={styles.vertical_nav_icon}
          onClick={() => {
            setVerticalOpen(!verticalOpen);
          }}
        >
          {!verticalOpen ? (
            <AiOutlineMenu size='1.5em' />
          ) : (
            <AiOutlineClose size='1.5em' />
          )}
        </div>
      </div>
      <div
        className={styles.drop_down_container}
        style={{
          height: verticalOpen ? "450px" : "0px",
        }}
      >
        <NavLinks
          setVerticalOpen={setVerticalOpen}
          handleSectionScroll={handleSectionScroll}
        />
      </div>
    </div>
  );
};

export { Navbar };
