import React from "react";
import styles from "./About.module.css";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";

const About = () => {
  const details = {
    about:
      "Passion-driven learner and a web developer with the ability to write clean, reusable, optimised code. Skilled and experienced at building and maintaining web applications. Looking forward to joining a progressive and challenging work environment.",
    email: "s.sudharshan2151@gmail.com",
    mobile: "+91 9384905182",
    location: "Erode, TamilNadu",
  };
  const { about, email, mobile, location } = details;

  const handleMail = () => {
    window.open(`mailto:${email}`);
  };

  return (
    <div className={`${styles.container} about section`} id="about" >
      <div>
        <div className={styles.heading}>About</div>
        <div className={styles.content} id="user-detail-intro">{about}</div>
        <div className={styles.contact}>
          <div className={styles.contact_items}>
            <HiLocationMarker className={styles.icon} size='1.3em' />
            <span>{location}</span>
          </div>
          <div
            className={`${styles.contact_items} ${styles.gmail}`}
            onClick={handleMail}
          >
            <GrMail className={styles.icon} size='1.3em' />
            <span>{email}</span>
          </div>
          <div className={styles.contact_items}>
            <FaPhoneSquareAlt className={styles.icon} size='1.3em' />
            <span>{mobile}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
