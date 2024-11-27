import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "../project_card/ProjectCard";
import * as images from "../../assets/project_images";

const Projects = () => {
  const {
    bookMybus,
    libraNexus,
    mindMesh1,
    MindMesh2,
    MindMesh3,
    MindMesh4,
  } = images;
   
  let data = [
    {
      title: "Mind Mesh",
      image: [
        { src: mindMesh1, alt: "Mind Mesh" },
        { src: MindMesh2, alt: "Mind Mesh" },
        { src: MindMesh3, alt: "Mind Mesh" },
        { src: MindMesh4, alt: "Mind Mesh" },
      ],
      about:
        "MindMesh brings AI to interview preparation. Discover a cutting-edge tool for honing your skills with AI feedback.",
      tech_stack: [
        "React",
        "Redux",
        "Styled components",
        "Material UI",
        "Java",
        "MySQL",
        "Spring Boot",
      ],
      links: [
        "https://github.com/sudharshan2151/MindMesh/",
        "https://drive.google.com/file/d/1eQrW9SKqFmJfipo4uRSeW-CZNDLuouTV/view",
      ],
    },
    {
      title: "Book My Bus",
      image: [
        { src: bookMybus, alt: "Book My Bus" },
      ],
      about: "The Book My Bus is a web application that allows users to manage buses, routes, and user feedback related to bus services.",
      tech_stack: [
        "Java",
        "Spring Data JPA",
        "MySQL",
        "Spring Boot",
      ],
      links: [
        "https://github.com/sudharshan2151/Book-My-Bus",
        "https://ankits-book-my-bus.netlify.app/",
      ],
    },
    {
      title: "Library Management System",
      image: [
        { src: libraNexus, alt: "Libra Nexus" },
        
      ],
      about:
        "The Library Management System is aims to provide librarians and students with a platform to facilitate book management, rental transactions, feedback collection, and more.",
      tech_stack: ["Java", "MySQL", "Hibernate"],
      links: [
        "https://github.com/sudharshan2151/Libra_Nexus",
        "https://drive.google.com/file/d/1MBcpgwgEmhQsywGeoMSVpUOL-TATa04l/view?usp=sharing",
      ],
    },
    // {
    //     title : ,
    //     image : ,
    //     about : ,
    //     links : ,
    //     badge :,
    // }
  ];

  return (
    <div className={`${styles.container} nav-link projects`} id="projects">
      <div className={styles.heading}>Projects</div>
      <div className={styles.aligner}>
        {data?.map((item, i) => {
          return <ProjectCard key={i} item={item} />;
        })}
      </div>
    </div>
  );
};

export { Projects };
