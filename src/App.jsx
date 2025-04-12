import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

// import Banner from "./assets/components/banner/Banner";
import Header from "./assets/components/header/Header";
import About from "./assets/components/about/About";
import Project from "./assets/components/projects/Project";
import WhatWillGet from "./assets/components/what-will-get/WhatWillGet";
import Skill from "./assets/components/skill/Skill";
import Footer from "./assets/components/footer/Footer";
import BannerNew from "./assets/components/banner-new/BannerNew";
import Contact from "./assets/components/contact/Contact";
import { useEffect, useState } from "react";
import ModalNotification from "./assets/components/modal/ModalNotification";


function App() {

   const [showModal, setShowModal] = useState(false);
    useEffect(() => {
      // Show modal after 30 seconds
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 3000);
  
      // Clean up the timer when component unmounts
      return () => clearTimeout(timer);
    }, []);
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
  return (
    <>
      <Header />

      <main className="main">
        {/* <Banner /> */}
        <BannerNew/>
        <About />
        <Skill />
        <WhatWillGet />
        <Project />
        <Contact/>
        
      </main>
      <Footer/>
      {showModal && <ModalNotification onClose={handleCloseModal} />}
    </>
  );
}

export default App;
