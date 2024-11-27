import React from "react";
import styles from "./Experience.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { CgWorkAlt } from "react-icons/cg";
import { FaBookReader } from "react-icons/fa";

const Experience = () => {
  const style = {
    contentStyle: {
      border: "1px solid #e5e5e5",
      boxShadow: "none",
    },
    iconStyle: {
      background: "#51989d",
      color: "#fff",
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Experience & Education</div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={style.contentStyle}
            date='March, 2024 - Present'
            iconStyle={style.iconStyle}
            icon={<CgWorkAlt />}
          >
            <h3>Full Stack Web Developer</h3>
            <h4>Piquota Digital Solutions,Coimbatore</h4>
            <p className={styles.content_p}>
              Roles and Responsibilities,
              <br />
              - Contributed to Full Stack Java development projects using technologies
              such as HTML,CSS,Javascript,React.js,MySQL,
              Hibernate,Spring Boot and the Play Framework.
              <br />
              - Collaborated with team members to design and implement efficient  and
              scalable solutions, deploying the code using Linux VM ,ensuring code quality and reliability through rigorous
              testing.
              <br />
              - Participatedin architectural discussions to enhance system performance
              andmaintainability, writing clean and maintainable code.
              <br />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={style.contentStyle}
            date='January 2023-Feb-2024'
            iconStyle={style.iconStyle}
            icon={<FaBookReader />}
          >
            <h3>Full Stack Web Development (Trainee)</h3>
            <h4>Masai School, Bangalore</h4>
            <p className={styles.content_p}>
              Worked extensively on,
              <br />
              - Full Stack Web Development (Java)
              <br />
              - Data Structure and Algorithms
              <br />
              - Soft skills
              <br />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export { Experience };
