import React from "react";
import styles from "./Tools.module.css";
import sts from "../../assets/sts.png";
import postman from "../../assets/postman.jpg";
import git from "../../assets/git.jpg";
import vsCode from "../../assets/vs.code.jpg";


const Tools = () => {
  let data = [
    {
      title: "STS",
      image: sts,
    },
    {
      title: "Postman",
      image: postman,
    },
    {
      title: "GIT",
      image: git,
    },
    {
      title: "VS Code",
      image: vsCode,
    }
  ];



  return (
    <div className={styles.container}>
      <div className={styles.heading}>Tools</div>
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

export { Tools };
