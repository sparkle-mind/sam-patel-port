import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Banner from "./assets/components/banner/Banner";
import Header from "./assets/components/header/Header";
import About from "./assets/components/about/About";
import Project from "./assets/components/projects/Project";
import WhatWillGet from "./assets/components/what-will-get/WhatWillGet";
import Skill from "./assets/components/skill/Skill";
import Footer from "./assets/components/footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Banner />
        <About />
        <Skill />
        <WhatWillGet />
        <Project />
      </main>
      <Footer/>
    </>
  );
}

export default App;
