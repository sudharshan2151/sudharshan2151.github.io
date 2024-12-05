import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Proficiency } from "./components/proficiency/Proficiency";
import { Projects } from "./components/projects/Projects";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { ScrollTopBtn } from "./components/scroll_top_btn/ScrollTopBtn";
import { Zoom } from "react-awesome-reveal";
import { Tools } from "./components/tootls/Tools";
import { Github } from "./components/github/Github";
import { Experience } from "./components/experience/Experience";
import { Navbar } from "./components/navbar/Navbar";
import { ContactForm } from "./components/contact_form/ContactForm";
import Loader from "./components/Loader/Loader";


const App = () => {

  const home_section = useRef(null);
  const about_section = useRef(null);
  const skills_section = useRef(null);
  const tools_section = useRef(null);
  const project_section = useRef(null);
  const contact_section = useRef(null);
  const [load,setLoad] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoad(false);
    },2000)
  },[])

  const handleSectionScroll = (arg) => {
    let scroll_obj = {
      left: 0,
      behavior: "smooth",
    };

    if (arg === "home" && home_section.current) {
      scroll_obj.top = home_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    }
    else if (arg === "about" && about_section.current) {
      scroll_obj.top = about_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    } else if (arg === "skills" && skills_section.current) {
      scroll_obj.top = skills_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    } else if (arg === "tools" && tools_section.current) {
      scroll_obj.top = tools_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    } else if (arg === "projects" && project_section.current) {
      scroll_obj.top = project_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    } else if (arg === "contact" && contact_section.current) {
      scroll_obj.top = contact_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    }
  };

  if(load)return <Loader color="#186883" />

  return (
    <div className="container">
      <Navbar handleSectionScroll={handleSectionScroll} />
      <div ref={home_section}>
        <Header />
      </div>
      <div ref={about_section}>
        <Zoom triggerOnce={true} duration={1500}>
          <About />
        </Zoom>
      </div>

      <Zoom triggerOnce={true} duration={1500}>
        <Experience />
      </Zoom>

      <Zoom triggerOnce={true} duration={1500}>
        <Proficiency />
      </Zoom>

      <div ref={skills_section}>
        <Zoom triggerOnce={true} duration={1500}>
          <Skills />
        </Zoom>
      </div>

      <div ref={tools_section}>
        <Zoom triggerOnce={true} duration={1500}>
          <Tools />
        </Zoom>
      </div>

      <Zoom triggerOnce={true} duration={1500}>
        <Github />
      </Zoom>

      <div ref={project_section}>
        <Zoom triggerOnce={true} duration={1500}>
          <Projects />
        </Zoom>
      </div>

      <div ref={contact_section}>
        <Zoom triggerOnce={true} duration={1500}>
          <ContactForm />
        </Zoom>
      </div>

      <Zoom triggerOnce={true} duration={1500}>
        <Footer />
      </Zoom>

      <ScrollTopBtn />
    </div>
  );
};

export default App;
