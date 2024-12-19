import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Banner from "./assets/components/banner/Banner";
import Header from "./assets/components/header/Header";
import About from "./assets/components/about/About";
import Project from "./assets/components/projects/Project";
import WhatWillGet from "./assets/components/what-will-get/WhatWillGet";
import Laptop from "./assets/components/laptop/Laptop";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Banner />
        <Laptop />
        <About />
        <WhatWillGet />
        <Project />
      </main>
    </>
  );
}

export default App;
