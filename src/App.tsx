import React from "react";
import { Layout } from "antd";
import Title from "./Components/Title";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const { Footer } = Layout;

const App = () => {
  return (
    <>
      <Title />
      <About />
      <Skill />
      <Experience />
      <Projects />
      <Contact />
      <Footer
        style={{
          marginTop: 64,
          background: "#EEEEEE",
          opacity: 0.6,
          textAlign: "center",
        }}
      >
        Copyright © 2021 KyuHyuk Lee
      </Footer>
    </>
  );
};

export default App;
