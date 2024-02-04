import React from "react";
import styles from "./Skills.module.css";
import html from "../../assets/html_5.svg";
import css from "../../assets/css_3.svg";
import javascript from "../../assets/javascript.svg";
import java from "../../assets/java.svg";
import spring from "../../assets/spring.svg";
import spring_boot from "../../assets/spring_boot.png";
import hibernate from "../../assets/hibernate.png";
import github from "../../assets/github-icon.svg";
import dsa from "../../assets/ds-removebg-preview.png";
import mysql from "../../assets/mysql.svg";

const Skills = () => {
  let data = [
    {
      title: "HTML",
      image: html,
    },
    {
      title: "CSS",
      image: css,
    },
    {
      title: "Javascript",
      image: javascript,
    },
    {
      title: "Java",
      image: java,
    },
    {
      title: "Spring",
      image: spring,
    },
    {
      title: "Hibernate",
      image: hibernate,
    },
    {
      title: "MySQL",
      image: mysql,
    },
    {
      title: "Spring Boot",
      image: spring_boot,
    },
    {
      title: "Github",
      image: github,
    },
    {
      title: "DS & ALgo",
      image: dsa,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Skills & Interests</div>
      <div className={styles.aligner}>
        {data.map((item, i) => {
          return (
            <div key={i} className={styles.listItem}>
              <img src={item.image} alt={item.title} />
              <div className={styles.title}>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Skills };
