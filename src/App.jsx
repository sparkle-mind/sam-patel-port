import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Banner from "./assets/components/banner/Banner";
import Header from "./assets/components/header/Header";
import About from "./assets/components/about/About";
import Project from "./assets/components/projects/Project";
import WhatWillGet from "./assets/components/what-will-get/WhatWillGet";
import Laptop from "./assets/components/laptop/Laptop";
import Skill from "./assets/components/skill/Skill";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
function App() {
  useEffect(() => {
    // Initialize AOS when the component is mounted
    AOS.init({
      duration: 1000, // animation duration
      once: true, // only animate once
    });
  }, []);

  return (
    <>
      <Header />

      <main className="main">
        <Banner />
        <About />
        <Laptop />
        <WhatWillGet />
        <Project />
        <Skill/>
      </main>
    </>
  );
}

export default App;
